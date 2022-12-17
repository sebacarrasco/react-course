import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp"
import "./index.css";

// const divRoot = document.querySelector("#root");
const divRoot = $("#root")[0];
// ReactDOM.render( <PrimeraApp saludo="Hola hola"/>, divRoot);
ReactDOM.render( <CounterApp value={ 123 }/>, divRoot);