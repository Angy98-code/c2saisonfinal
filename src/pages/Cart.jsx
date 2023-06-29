/** @format */

import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../componentsSlider/slider/slide";
import "../index.css";
import dataSeason2 from "./dataSeason";

const ImgStyled = styled.div`
  display: flex;
  position: relative;
  overflow: auto;
  height: 230px;
  margin: 0px;
  column-gap: 3px;
  padding-left: 4px;
  overflow: auto;
  background-color: rgba(234, 223, 208, 0.5);
`;

const HStyled = styled.h1`
margin : 50px;
font-size : 40px;

`

function Cart() {
  const queryString = window.location.search.substring(1).split("/");
  console.log("queryString", queryString);
  let parameterName = queryString[0].split("=");
  let vegetalNameBrut = parameterName[1].replace(/%20/g, " ");
  let vegetalName = decodeURIComponent(vegetalNameBrut);
  let parameterSeason = queryString[1].split("=");
  let vegetalSeason = parameterSeason[1];

  console.log("parameterName", parameterName);
  console.log("parameterSeason", parameterSeason);

  console.log("vegetalName :", vegetalName);
  console.log("vegetalSeason :", vegetalSeason);

  const vegetalCart = dataSeason2.filter(
    (element) =>
      element.name === vegetalName && element.season === vegetalSeason
  );
  console.log("vegetalCart", vegetalCart);

  const arrayPhotos = vegetalCart.find((el, index) => el.photos);
  console.log("arrayPhotos", arrayPhotos);

  return (
    <div className="cartcontainer">
      <Navbar />

      {vegetalCart.map((element, index) => (
        <div key={`${element}-${index}`}>
          <HStyled>{element.name}</HStyled>
          <ImgStyled>
            {element.photos.map((image, index) => (
              <img
                className="cartimages"
                key={`${element}-${index}`}
                src={image}
                alt=""
              />
            ))}
          </ImgStyled>

          <div className="descriptioncontainer">
            {element.description}
            <br />
          </div>
          <div className="descriptioncontainer1">
            {element.description1}
            <br />
          </div>
          <div className="descriptioncontainer2">
            {element.description2}
            <br />
          </div>
        </div>
      ))}
      <Slider />
      <Footer />
    </div>
  );
}

export default Cart;

// encodage
// parametre <URLurl><a href="href"></a></URLurl>
//video url ok très intéressant
//récupération paramètre en js plus intéressant
//

// //récupération du paramètre uniquement sur la page sinon
// //il faut utiliser new Url pour plus de données par exemple
// //pour name, passeword
// const queryString = window.location.search; //.search c'est le paramètre
// console.log("queryString", queryString);
// //pour avoir les données plus formaté comme un set ou un map
// const urlParams = new URLSearchParams(queryString);
// console.log("urlParams", urlParams);
// //exemple pour trouver le paramètre que l'on recherche mais on peut faire d'autres recherches
// //dans l'url on a bien name = , c'est ce que l'on récupère ici
// const vegetalName = urlParams.get("name");
// console.log("vegetalName :", vegetalName);
// //par exemple pour savoir si name existe, réponse true ...
// console.log(urlParams.has("name"));

// //---------------
