import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MetaSEO from "./../MetaSEO";

import error404 from "./../../assets/img/404/404.svg";
import rocket from "./../../assets/img/404/rocket.svg";
import earth from "./../../assets/img/404/earth.svg";
import moon from "./../../assets/img/404/moon.svg";
import astronaut from "./../../assets/img/404/astronaut.svg";
import logo from "./../../assets/img/404/logo.svg";

import "./Error404.scss"

export const Error404 = ({ path }) => {
  const NAME = "ecommerce";
  return (
    <div className="bg-purple">
      <MetaSEO
        title={`Error, page no found | ${NAME}`}
        description="el recurso que esta buscando no se encuentra"
        keywords={["Error", "404", "Pague no found"]}
      />
      <div className="stars">
        <div className="custom-navbar">
          <div className="brand-logo">
            <img src={logo} width="80px" alt="the logo" />
          </div>
        </div>
        <div className="central-body">
          <img
            className="image-404"
            src={error404}
            width="300px"
            alt="text 404"
          />
          <a href="/" className="btn-go-home">
            GO BACK HOME
          </a>
        </div>
        <div className="object">
          <img
            className="object_rocket"
            src={rocket}
            width="40px"
            alt="cohete"
          />
          <div className="earth-moon">
            <img
              className="object_earth"
              src={earth}
              width="100px"
              alt="planeta tierra"
            />
            <img
              className="object_moon"
              src={moon}
              width="80px"
              alt="la luna"
            />
          </div>
          <div className="box_astronaut">
            <img
              className="object_astronaut"
              src={astronaut}
              width="140px"
              alt="astronauta"
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
    </div>
  );
};

Error404.propTypes = {
  path: PropTypes.string.isRequired,
};

Error404.defaultProps = {
  path: "/",
};
