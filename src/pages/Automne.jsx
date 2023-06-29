/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import dataSeason2 from "./dataSeason";
// import PropTypes from "prop-types";
// import CardVegetable from "../components/CardVegetable";

const FruitsStyled = styled.div`
  display: flex;
  background-color: rgba(234, 223, 208, 0.5);
  border-radius: 10px;
  flex-direction: column;
  min-width: 250px;
  justify-content: flex-start;
  margin-left: 30px;
  padding: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  align-items: flex-start;
  text-align: right;
  color: black;
`;

const LegumesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-style: normal;
  font-weight: 500;
  min-width: 250px;
  padding: 50px;
  font-size: 18px;
  line-height: 26px;
  align-items: flex-start;
  text-align: left;
  color: black;
  background-color: rgba(234, 223, 208, 0.5);
  border-radius: 10px;
`;

//   @media (max-width: 450px) {
//     line-height: 20px;
//     font-size: 12px;
//   }

const TitleStyled = styled.h1`
  font-size: 25px;
  padding-top: 60px;
`;

const ImgStyled = styled.img`
  display: flex;
  width: 21px;
  height: 21px;
  z-index: 1;
  padding: 6px;
  position: absolute;
`;

// img {
//   object-fit: fill;
//   position: absolute;
//   width: 120vw;
//   height: 110vh;
//   color: white;
//   z-index: -1;
// }
const ElStyled = styled.li`
  padding-left: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 21px;
  color: black;
`;

const VegetableStyled = styled.div`
  display: flex;
  padding-top: 25px;
  justify-content: space-evenly;
  padding-bottom: 50px;
`;

const H3Styled = styled.h3`
  text-decoration: underline;
`;

const AStyled = styled.div`
  text-decoration: none;
`;
const UlStyled = styled.ul`
  line-height: 0px;
  color: black;
  margin: 0;
`;

export default function Automne() {
  const title = "En automne c'est 2 saison :";
  const fruitsAutomne = dataSeason2.filter(
    (element) => element.type === "fruit" && element.season === "automne"
  );

  const legumesAutomne = dataSeason2.filter(
    (element) => element.type === "légume" && element.season === "automne"
  );
  console.log("fruitsAutomne", fruitsAutomne);
  console.log("legumesAutomne", legumesAutomne);
  function HandleClick(event, element) {
    event.preventDefault();
    console.log(
      "Le lien cliqué est : " + element.name + "   =  " + element.type
    );

    element.type === "légume" ? console.log("légume") : console.log("fruit");

    return <div></div>;
  }

  return (
    <div className="automnecontainer">
      <Navbar />
      <TitleStyled>
        <mark>{title}</mark>
      </TitleStyled>
      <VegetableStyled>
        <LegumesStyled>
          <H3Styled>Les légumes : </H3Styled>
          {/* dataSeason2.filter  */}
          {legumesAutomne.map((element, index) => (
            <AStyled
              key={`${element}-${index}`}
              onClick={(event) => HandleClick(event, element)}
            >
              <Link
                to={"/cart?name=" + element.name + "/season=" + element.season}
              >
                <UlStyled>
                  <ImgStyled src={element.name + ".png"} alt="" />
                  <ElStyled>{element.name}</ElStyled>
                </UlStyled>
              </Link>
            </AStyled>
          ))}
        </LegumesStyled>
        <FruitsStyled>
          <H3Styled>Les fruits : </H3Styled>
          {fruitsAutomne.map((element, index) => (
            <AStyled
              href=" "
              // key={index}
              key={`${element}-${index}`}
              onClick={(event) => HandleClick(event, element)}
            >
              <Link
                to={"/cart?name=" + element.name + "/season=" + element.season}
              >
                <UlStyled>
                  <ImgStyled src={element.name + ".png"} alt="" />
                  <ElStyled> {element.name}</ElStyled>
                </UlStyled>
              </Link>
            </AStyled>
          ))}
        </FruitsStyled>
      </VegetableStyled>
      <Footer />
    </div>
  );
}
