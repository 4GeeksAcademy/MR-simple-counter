import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Home = (props) => {
  const [Counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((previousCounter) => previousCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="banner py-5 px-5">
        <div className="container mx-1 reloj">
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="container  mx-1  unidad">{props.unidad}</div>
        <div className="container  mx-1 decena">{props.decena}</div>
        <div className="container  mx-1 centena">{props.centena}</div>
        <div className="container  mx-1 unidadmil">{props.unidadmil}</div>
        <div className="container  mx-1 decenamil">{props.decenamil}</div>
        <div className="container  mx-1 centenamil">{props.centenamil}</div>
      </div>
    </>
  );
};

Home.propTypes = {
  unidad: PropTypes.number,
  decena: PropTypes.number,
  centena: PropTypes.number,
  unidadmil: PropTypes.number,
  decenamil: PropTypes.number,
  centenamil: PropTypes.number,
};

export default Home;
