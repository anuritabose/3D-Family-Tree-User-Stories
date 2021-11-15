import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AddRelation = () => {
  const [relatedName, setRelatedName] = useState("");
  const [relationName, setRelationName] = useState(-1);


  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("relatedName", relatedName);
    formData.append("relationName", relationName);

    setRelatedName("");
    setRelationName(-1);

    axios
      .post("/members/add-relation", formData)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AddRelationContainer>
      <div className="container">
        <h1>ADD RELATIONSHIP WITH EXISTING FAMILY MEMBER</h1>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="relatedname">FAMILY MEMBER'S NAME </label>
            <input
              type="text"
              name="relatedname"
              value={relatedName}
              onChange={(e) => setRelatedName(e.target.value)}
              className="form-control"
              placeholder="Relative's Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="relation">RELATION WITH THEM</label>
            <textarea
              value={relationName}
              onChange={(e) => setRelationName(e.target.value)}
              className="form-control"
              placehilder="Realtion"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            POST ARTICLE
          </button>
        </form>  
      </div>
    </AddRelationContainer>
  );
};

export default AddRelation;

//MAIN CONTAINER
const AddRelationContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 31.25rem;
  background-color: #d5f4e6;


  h1 {
    font-weight: 900;
    color: var(--dark-green);
    font-family:Rubik;
  }

  .btn-primary {
    margin-top: 2rem;
    background: var(--dark-green);
    border: none;
    &:hover {
      background: var(--light-green);
    }
  }

  .message {
    font-weight: 900;
    color: tomato;
    padding: 1rem 1rem 1rem 0;
    font-family:Rubik;
  }
`;