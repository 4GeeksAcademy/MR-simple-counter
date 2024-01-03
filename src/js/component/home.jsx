import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Home = () => {
  const [Counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((previousCounter) => previousCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const calculateTime = (totalSeconds) => {
    const centenamil = Math.floor(totalSeconds / 100000) % 10;
    const decenamil = Math.floor(totalSeconds / 10000) % 10;
    const unidadmil = Math.floor(totalSeconds / 1000) % 10;
    const centena = Math.floor(totalSeconds / 100) % 10;
    const decena = Math.floor(totalSeconds / 10) % 10;
    const unidad = totalSeconds % 10;

    return { unidad, decena, centena, unidadmil, decenamil, centenamil };
  };

  const timeParts = calculateTime(Counter);

  return (
    <>
      <div className="banner py-5 px-5">
        <div className="container mx-1 reloj">
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="container mx-1 centenamil">{timeParts.centenamil}</div>
        <div className="container mx-1 decenamil">{timeParts.decenamil}</div>
        <div className="container mx-1 unidadmil">{timeParts.unidadmil}</div>
        <div className="container mx-1 centena">{timeParts.centena}</div>
        <div className="container mx-1 decena">{timeParts.decena}</div>
        <div className="container mx-1 unidad">{timeParts.unidad}</div>
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
