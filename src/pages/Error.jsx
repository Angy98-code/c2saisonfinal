/** @format */

import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const ErrorcontainerStyled = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const SpanErrorStyled = styled.div`
  position: absolute;
  width: 100vw;
`;

const TextStyled = styled.h1`
  color: black;
  z-index : 1;
`;

export default function Error() {
  return (
    <div>
      <SpanErrorStyled>
        <Navbar />
      </SpanErrorStyled>
      <ErrorcontainerStyled>
        <TextStyled>Erreur, merci de choisir votre saison ...</TextStyled>
        <div  className="imageerror" alt="flamme" />
      </ErrorcontainerStyled>
    </div>
  );
}
