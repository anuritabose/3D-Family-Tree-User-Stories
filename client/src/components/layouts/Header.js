import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <MainContainer>
      <h1>
        3D Family Tree User Stories
      </h1>
    </MainContainer>
  );
};

export default Header;

// MAIN CONTEINER
const MainContainer = styled.header`
  background: url(../../images/header-bg.jpg) no-repeat center/cover;
  height: 25rem;
  
  h1 {
    transform: translate(-50%, -50%);
    color: black;
    font-weight: 900;
    font-size: 2.5rem;
    position: absolute;
    top: 29%;
    left: 48%;
  }
`;
