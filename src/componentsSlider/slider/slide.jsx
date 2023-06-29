/** @format */

import React, { useState } from "react";
import "./slide.css";
import BtnSlider from "./BtnSlider";
import dataSeason2 from "../../pages/dataSeason";

export default function Slider() {
  //parameter
  const queryString = window.location.search.substring(1).split("/");
  console.log("queryString", queryString);
let parameterName = queryString[0].split("=");
let vegetalNameBrut = parameterName[1].replace(/%20/g, " ",);
let vegetalName = decodeURIComponent(vegetalNameBrut);
let parameterSeason = queryString[1].split("=");
let vegetalSeason = parameterSeason[1];

console.log("parameterName", parameterName);
console.log("parameterSeason", parameterSeason);

console.log("vegetalName :", vegetalName);
console.log("vegetalSeason :", vegetalSeason);

 // const urlParams = new URLSearchParams(queryString);
  
  // console.log("urlParams", urlParams);
  // const vegetalName = urlParams.get("name");
 
  // console.log("vegetalName :", vegetalName);
  // //parameter is there ?
  // console.log(urlParams.has("name"));
  // // console.log("vegetalSeason", vegetalSeason);

  //parameter name
  const vegetalCart = dataSeason2.filter(
    (element) => element.name === vegetalName && element.season === vegetalSeason
  );
  console.log("vegetalCart", vegetalCart);
//TAF trouver le moyen de récupérer url saison cliqué

// const vegetalSeasonOnClick = dataSeason2.filter(
//   (element) => element.name === vegetalName
// );
// console.log("vegetalCart", vegetalCart);
//-----
  // photos array
  let arrayPhotos = [];
  vegetalCart.forEach((element) => {
    element.photos.forEach((element) => {
      arrayPhotos.push(element);
    });
  });

  // useState
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  // nextSlide
  const nextSlide = () => {
    console.log();
    if (slideAnim.index !== arrayPhotos.length && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index + 1, inProgress: false });
      }, 400);
    } else if (
      slideAnim.index === arrayPhotos.length &&
      !slideAnim.inProgress
    ) {
      setSlideAnim({ index: 1, inProgress: true });

      setTimeout(() => {
        setSlideAnim({ index: 1, inProgress: false });
      }, 400);
    }
  };

  // prevSlide
  const prevSlide = () => {
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index - 1, inProgress: false });
      }, 400);
    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: arrayPhotos.length, inProgress: true });

      setTimeout(() => {
        setSlideAnim({ index: arrayPhotos.length, inProgress: false });
      }, 400);
    }
  };

  // moveDot
  const moveDot = (index) => {
    setSlideAnim({ index: index, inProgress: false });
  };

  return (
    <div className="container-slider">
      {arrayPhotos.map((obj, index) => {
        console.log("HILFE :", obj);
        return (
          <div
            key={`${obj}-${index}`}
            className={
              slideAnim.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img src={process.env.PUBLIC_URL +`${obj}`} alt="" />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: arrayPhotos.length }).map((item, index) => {
          return (
            <div
              key={`${item}-${index}`}
              className={slideAnim.index === index + 1 ? "dot active" : "dot"}
              onClick={() => moveDot(index + 1)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
// par public Img
//   <img
//              src={
//                process.env.PUBLIC_URL + `/Imgs/${vegetalName}${index + 1}.jpg`
//              }
//              alt=""
//            />
