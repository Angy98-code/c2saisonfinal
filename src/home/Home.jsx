/** @format */

import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SpanStyled = styled.span`
  font-size: 20px;
  font-family: 400;
  text-decoration: underline;
`;
const PStyled = styled.p`
text-align : left;
padding-left : 20px;
text-indent : 10px;
`
const UlStyled = styled.ul`
  text-align: left;
 
`;
const H1Styled = styled.h1`
  font-family: Cookie, cursive;
  font-size : 80px;
`; 
// import {Link} from "react-router-dom"
export default function Home() {
  return (
    <div className="homecontainer">
      {/* 
      <Link to="printemps">We are offering the following services</Link>
      <Link to="été">You can contact us by submitting form</Link> */}
      <Navbar />

      <H1Styled>Miam...</H1Styled>
      <PStyled>
        Les fruits et légumes de saison sont ceux qui sont cultivés
        naturellement en fonction de la saison et du climat local. Ils sont
        généralement plus frais, plus savoureux et plus nutritifs que les fruits
        et légumes cultivés hors saison et importés de régions lointaines.
      </PStyled>
      <br />
      <PStyled>
        Manger des fruits et légumes de saison peut également contribuer à
        réduire l'impact environnemental de l'agriculture en réduisant le besoin
        de transports longue distance et de serres chauffées.
      </PStyled>
      <br />
      <div className="homedescription">
        <strong>
          Voici quelques exemples de fruits et légumes de saison en fonction des
          saisons :
        </strong>
        <UlStyled>
          <li>
            <p>
              <SpanStyled>Printemps :</SpanStyled> asperges, fraises, cerises,
              rhubarbe, navets, carottes nouvelles, épinards, radis, pois
              mange-tout, fèves, artichauts, laitue.
            </p>
          </li>
          <li>
            <p>
              <SpanStyled>Été :</SpanStyled> abricots, pêches, melons,
              pastèques, framboises, myrtilles, mûres, prunes, courgettes,
              tomates, aubergines, poivrons, haricots verts, concombres, maïs.
            </p>
          </li>
          <li>
            <p>
              <SpanStyled>Automne :</SpanStyled> pommes, poires, raisins,
              figues, prunes, grenades, citrouilles, courges, patates douces,
              choux-fleurs, brocolis, potirons, poireaux, épinards, blettes.
            </p>
          </li>
          <li>
            <p>
              <SpanStyled>Hiver :</SpanStyled> oranges, mandarines, citrons,
              pamplemousses, kiwis, pommes, poires, dattes, coings, choux de
              Bruxelles, choux-fleurs, céleris-raves, topinambours, panais,
              endives, betteraves, carottes.
            </p>
          </li>
        </UlStyled>
      </div>
      <br />

      <p>
        <strong>
          Il est important de noter que la saisonnalité des fruits et légumes
          peut varier en fonction du climat, de la région et de la méthode de
          culture. Il est donc utile de se renseigner sur les fruits et légumes
          locaux et de saison dans sa région.
        </strong>
        <br />
        <br />
        <br />
      </p>
      <Footer />
    </div>
  );
}
