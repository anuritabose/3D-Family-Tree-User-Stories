import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const AddMember = () => {
  const [memberName, setMemberName] = useState("");
  const [relatedName, setRelatedName] = useState([]);
  const [relationName, setRelationName] = useState([]);
  const [fileName, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("memberName", memberName);
    formData.append("relatedName", relatedName);
    formData.append("relationName", relationName);
    formData.append("memberImage", fileName);

    setMemberName("");
    setRelatedName([]);
    setRelationName([]);

    axios
      .post("/members/add-member", formData)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AddMemberContainer>
      <div className="container">
        <h1>ADD FAMILY MEMBER</h1>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="membername">YOUR NAME</label>
            <input
              type="text"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              className="form-control"
              placeholder="Member Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">CHOOSE IMAGE</label>
            <input
              type="file"
              filename="articleImage"
              className="form-control-file"
              onChange={onChangeFile}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            ADD MEMBER
          </button>
        </form>   
        
        
      </div>
    </AddMemberContainer>
  );
};

export default AddMember;

//MAIN CONTAINER
const AddMemberContainer = styled.div`
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