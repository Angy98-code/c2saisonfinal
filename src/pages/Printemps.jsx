/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import dataSeason2 from "./dataSeason";

// import PropTypes from "prop-types";
// import CardVegetable from "../components/CardVegetable";

export const FruitsStyled = styled.div`
  display: flex;
  background-color: rgba(234, 223, 208, 0.5);
  border-radius: 10px;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 30px;
  padding: 50px;
  min-width : 250px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  align-items: flex-start;
  text-align: right;
  color: black;
`;

export const LegumesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-style: normal;
  font-weight: 500;
  padding : 50px;
  min-width : 250px;
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

//props + CardVegetable
// export default function Printemps({id, fruits, legumes, title})

export default function Printemps() {
  const title = "Au printemps c'est 2 saison :";
  const fruitsPrintemps = dataSeason2.filter(
    (element) => element.type === "fruit" && element.season === "printemps"
  );

  const legumesPrintemps = dataSeason2.filter(
    (element) => element.type === "légume" && element.season === "printemps"
  );

  function HandleClick(event, element) {
    console.log("event", event);
    event.preventDefault();
    console.log(
      "Le lien cliqué est : " + element.name + "   =  " + element.type
    );

    element.type === "légume" ? console.log("légume") : console.log("fruit");
  }




  return (
    <div className="printempscontainer">
      <Navbar />
      <TitleStyled>
        <mark>{title}</mark>
      </TitleStyled>
      <VegetableStyled>
        <LegumesStyled>
          <H3Styled>Les légumes : </H3Styled>
          {/* dataSeason2.filter  */}
          {legumesPrintemps.map((element, index) => (
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
          {fruitsPrintemps.map((element, index) => (
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

// //props + CardVegetable
// /* avec la CardVegetale on a toutes les données des 4 saisons
//   {dataSeason.map((element, index) => (
//         <CardVegetable
//         key={`${element.id}-${index}`}
//         fruits={element.fruits}
//         legumes={element.legumes}
//         title={element.title}
//         ></CardVegetable>
//         ) )}/*
