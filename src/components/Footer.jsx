/** @format */

import React from "react";
import styled from "styled-components";

// const FooterContainer = styled.div`
//   height: 150px;
//   width: 100vw;
// `;
// background-color : Rgb(217,204,184);
const FooterContainer = styled.div`
  background-color: rgba(234, 223, 208, 0.5);
  height: 150px;
  display : flex;
  justify-content: center;
  align-items : center;
  
`;
const FooterStyled = styled.div`
  
 
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterStyled>
        {" "}
        Mes chaleureux remerciements à www.informatique-sur-mesure.com
      </FooterStyled>
    </FooterContainer>
  );
}
