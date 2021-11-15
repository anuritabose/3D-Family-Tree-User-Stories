import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Comment = (props) => {
  const [com, setCom] = useState("");
  const [message, setMessage] = useState("");
  const [postedBy, setpostedBy] = useState("");
  const [comments,setComments] = useState([]);

  const changeOnClick = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
  
    formData.append("com", com);
    formData.append("postedBy", postedBy);

    console.log(com);
    console.log(postedBy);
    
    setCom("");
    setpostedBy("");

    axios
      .put(`/articles/${props.match.params.id}/comment`, {
        "com":com,
        "postedBy":postedBy
    })
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });      
  };

  useEffect(() => {
    //REQUEST THE DATA FROM A SERVER AND SET DATA TO ARTICLES ARRAY
    axios
      .get(`/articles/${props.match.params.id}`)
      .then((response) => [
        setComments(response.data.comments)
      ])

      .catch((error) => console.log(error));
  }, []);


  // console.log(props);
  return (
    <CommentsContainer>
        <div className="comments">
        <h2>Comments!</h2>
        <div>
          {comments.map(function(d,index){
            return(<div className="comments__list-item">
              <h6 className="comments__list-item-title">{d.postedBy}</h6>
            <p className="comments__list-item-description">{d.com}</p>
            <hr/></div>);
          })}
        </div>
        <span className="message">{message}</span>
            <form onSubmit={changeOnClick} encType="multipart/form-data" className="contact-form">
              <h2 className="contact-form__title">Write a Comment</h2>
                <div className="row">
                  <div className="col-md-6">
                      <input
                        className="contact-form__input-text"
                        value={postedBy}
                        onChange={(e) => setpostedBy(e.target.value)}
                        placeholder="Name:"
                        />
                  </div>
                  </div>
                  <textarea
                    className="contact-form__textarea"
                    type="text"
                    value={com}
                    onChange={(e) => setCom(e.target.value)}
                    placeholder="Comment"
                  ></textarea>
        
                    <button type="submit" className="contact-form__submit" 
                    value="Send Comment">
                      Post Comment
                    </button>
                    
              </form>
            </div>
    </CommentsContainer>
  );
};

// main container
const CommentsContainer = styled.div`
  margin: 6rem auto;
  padding: 3rem 14rem;

  h2 {
    text-align: center;
    font-weight: 900;
    color: var(--dark-green);
  }

  p {
    font-size: 1.2rem;
  }

 
 img {
    width: 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  .comments h2.comments-title {
    font-size: 18px;
    padding-bottom: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ebebeb; 
  }
  
  .comments__list-item {
    list-style: none;
    margin-bottom: 1.875rem;
    padding-top: 1.875rem;
    border-top: 1px solid #eeeeee; 
  }
  
  .comments__list-item:first-child {
    padding-top: 0;
    border-top: none; 
  }
  
  .comments__list-item-image {
    float: left;
    width: 3.125rem;
    height: 3.125rem;
    margin-right: 1.25rem;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px; 
  }
  
  .comments__list-item-content {
    overflow: hidden; 
  }
  
  .comments__list-item-title {
    color: #333333;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.25rem;
    margin: 0; 
  }
  
  .comments__list-item-date {
    display: inline-block;
    color: #ccc;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    margin: 0 0 1rem; 
  }
  
  .comments__list-item-reply {
    float: right;
    padding: 0.25rem 0.5rem;
    color: #999;
    margin: -5px 0 20px;
    font-size: 0.75rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    border: 1px solid #ebebeb;
    -webkit-border-radius: 1.25rem;
    -moz-border-radius: 1.25rem;
    -ms-border-radius: 1.25rem;
    border-radius: 1.25rem; 
  }

  .comments__list-item-reply i {
      font-size: 0.75rem;
      float: left;
      margin-right: 0.25rem;
      margin-top: 0.125rem; 
  }
  
  .comments__list-item-reply:hover {
    color: #e74c3c; 
  }
  
  .contact-form {
    padding: 1.875rem;
    background: #fafafa;
    margin-bottom: 1.875rem;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px; 
  }
  .contact-form h2 {
      font-size: 18px;
      padding-bottom: 20px;
      margin-bottom: 30px;
      border-bottom: 1px solid #ebebeb; 
  }
  .contact-form__input-text, .contact-form__textarea {
      display: block;
      width: 100%;
      padding: 0.625rem 1.25rem;
      color: #999999;
      font-size: 0.875rem;
      font-weight: 400;
      background: #ffffff;
      outline: none;
      border: 1px solid #ebebeb;
      margin: 0 0 1.875rem;
      transition: all 0.2s ease-in-out;
      -moz-transition: all 0.2s ease-in-out;
      -webkit-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out; 
  }
  .contact-form__input-text:hover, .contact-form__textarea:hover {
      border-color: #e74c3c; 
  }
  .contact-form__textarea {
      height: 6.25rem; 
  }
  .contact-form__submit {
      color: #e74c3c;
      font-size: 13px;
      font-family: "Roboto", sans-serif;
      padding: 13px 50px;
      background: #fff;
      font-weight: 400;
      border: 1px solid #ebebeb;
      transition: all 0.2s ease-in-out;
      -moz-transition: all 0.2s ease-in-out;
      -webkit-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      text-transform: uppercase;
      outline: none;
      text-align: center;
      width: 100%;
      cursor: pointer;
      margin: 0; 
  }
  .contact-form__submit:hover {
        background: #e74c3c;
        border-color: #e74c3c;
        color: #fff; 
  }
`;

export default Comment;