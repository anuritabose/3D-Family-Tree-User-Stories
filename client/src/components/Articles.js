import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Axios from "axios";


const Articles = ({ posts }) => {
  const [article, setArticle] = useState([]);

  //DELETE ARTICLE BY ID
  const deleteArticle = (id) => {
    Axios.delete(`/articles/${id}`).then((response) => alert(response.data));
    setArticle(article.filter((element) => element._id !== id));
  };


  return (
    <MainContainer>
      {posts.map((article, key) => (
        <div className="container" key={key}>
          <img
            src={`/uploads/${article.articleImage}`}
            alt="..."
            style={{ width: "20%" }}
          />
          <Link
            to={{
              pathname: `/article/${article._id}`,
            }}
          >
            <h2>{article.title}</h2>
          </Link>
          <p>{article.article}</p>
          <span className="badge badge-secondary p-2">
            {article.authorname}
          </span>
          <div className="row my-5">
            <div className="col-sm-2">
              <Link
                to={`/update/${article._id}`}
                className="btn btn-outline-success"
              >
                Edit Article
              </Link>
            </div>
            <div className="col-sm-2">
              <button
                onClick={() => deleteArticle(article._id)}
                className="btn btn-outline-danger"
              >
                Delete Article
              </button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </MainContainer>
  );
};

export default Articles;

//MAIN CONTAINER
const MainContainer = styled.div
`
  margin: 7rem 0;


  img {
    display: block;
     margin: 0 auto;
  }
`;
