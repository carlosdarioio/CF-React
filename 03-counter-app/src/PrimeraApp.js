import React from "react";
import PropTypes from "prop-types";
//componentes class y const
//FC(funcstional components)=const

const PrimeraApp = ({ saludo, subtitulo }) => {
  //const saludo = "Hola Mundo " + 124 / 2;
  /*const saludo = {
    nombre: "Fernando",
    edad: 35,
  };*/
  //console.log(props.saludo);

  return (
    <>
      <h1>{saludo}</h1>
      {/*<pre>{JSON.stringify(saludo, null, 3)}</pre>*/}
      <p>{subtitulo}</p>
    </>
  );
};
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "Soy un substitulo",
};
export default PrimeraApp;
