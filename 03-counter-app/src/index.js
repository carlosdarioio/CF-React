import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import "./index.css";

//const saludo = <h1> Hola Mundo xd</h1>;

const divRoot = document.querySelector("#root");
console.log(divRoot);

//document.body.append(saludo); con js
//ReactDOM.render(<PrimeraApp saludo="Hola Soy Veget" />, divRoot); //con React!!
//5.
ReactDOM.render(<CounterApp value={33} />, divRoot);
