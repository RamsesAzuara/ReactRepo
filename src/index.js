import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp.js';
import './index.css';


const divRoot= document.querySelector('#root');

// ReactDOM.render(<PrimeraApp saludo="Hola Mundo React!"/>,divRoot);
ReactDOM.render(<CounterApp value={0}/>,divRoot);