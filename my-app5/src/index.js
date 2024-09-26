import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ABC from './Cone'
import reportWebVitals from './reportWebVitals';
import Conec from './Conec';
import Cones from './Cones';
import CounterC from './CountreC';
import Counterf from './counterF';
import HookCounterThree from './HookCounterThree';
import HookCounterFour from './HookCounterFour';
import HookCounterFive from './HookCounterfive';
import HookCounterSix from './HookCounterSix';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ABC />
    <Conec/>
   <Cones/>
   <CounterC/>
   <Counterf/>
   <HookCounterThree/>
   <HookCounterFour />
   <HookCounterFive />
   <HookCounterSix />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
