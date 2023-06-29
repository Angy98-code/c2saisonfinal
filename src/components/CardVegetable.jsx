/** @format */
//voir printemps pour l'utilisation, dans ce cas précis pas besoin

import React from "react";
import PropTypes from "prop-types";
import dataSeason from "../pages/dataSeason";


export default function CardVegetable({fruits, legumes, title }) {
 console.log(dataSeason);
  return (
    <div>
      <div>{fruits}</div>
      <div>{legumes}</div> 
      <h1>{title}</h1>
    </div>
  );
}


CardVegetable.propTypes = {
  fruits: PropTypes.array,
  legumes: PropTypes.array,
  title: PropTypes.string,
};
