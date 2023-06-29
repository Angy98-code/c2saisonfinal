/** @format */

import React from "react";
import styled from "styled-components";
import image from "../../under-construction-icon.png";
import "./index.css";

const DivContainer = styled.div`
  text-align: center;
  margin-top: 20%;
`;

const HomeStyled = styled.div`
  font-family: lucida;
  margin-top: 30px;
  display: flex;
  fontweight: 300;
  font-size: 35px;
  color: black;
  justify-content: center;
`;

const ImgStyled = styled.img`
  width: 150px;
  height: 150px;
  opacity: 0.6;  
`;

export default function Construction() {
  return (
    <DivContainer>
      <ImgStyled className="image" src={image} alt="image" />
      <HomeStyled>
        <div>En construction</div>
        <div className="points">
          <div className="loader">
            <span className="loader__element"></span>
            <span className="loader__element"></span>
            <span className="loader__element"></span>
          </div>
        </div>
      </HomeStyled>
    </DivContainer>
  );
}
