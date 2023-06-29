/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  return (
    <div className="navbarcontainer">
      <nav className="navcontainer">
        <Link to="/" className="navtitle">
          Les saisons
        </Link>
        <ul className="navseasons">
          <li>
            <Link to="/printemps" className="printemps">
              printemps
            </Link>
            <Link to="/été" className="ete">
              été
            </Link>
            <Link to="/automne" className="automne">
              automne
            </Link>
            <Link to="/hiver" className="hiver">
              hiver
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
