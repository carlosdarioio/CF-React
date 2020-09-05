//con racf creas de un solo
import React, { useState } from "react";
import PropTypes from "prop-types";

//2.
const CounterApp = ({ value = 10 }) => {
  //hoots famosos pero dificiles¿?  mira useState o cualquier otro use

  //creando funcion handleAdd
  //const state = useState("Goku");
  //console.log(state);
  const [counter, setCounter] = useState(value);
  console.log(counter);

  const handleAdd = () => {
    //console.log(e);
    //solo actualiza esto
    //setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  const handleReset = () => setCounter((c) => (c = 10));

  const handleReduce = () => {
    setCounter((c) => c - 1);
  };
  return (
    <>
      {/* 3. */}
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleReduce}>-1</button>
    </>
  );
};
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
