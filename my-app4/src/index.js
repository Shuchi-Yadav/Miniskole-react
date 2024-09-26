import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 


const messages = [
  "learn fullStack",
  "Apply for jobs",
  "invest in new plans"
];

export default function PrintMessage() {

 const [step,setState]= useState(1)

  function handlePrevious() {
    if(step > 1){
      setState(step-1)
    }  
  }

  function handleNext() {
    if(step < 3){
      setState(step+1)
    }
  }
   // JSX
   return (

    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active":""}`}>1</div>
        <div className={`${step >= 2 ? "active":""}`}>2</div>
        <div className={`${step >= 3 ? "active":""}`}>3</div>
      </div>

      <p className="message">{step}:{messages[step-1]}</p>

      <div className="buttons">
        <button  onClick ={handlePrevious}style={{ background: "#7950f2", color: "#fff" }}>Previous</button>
        <button  onClick ={handleNext}style={{ background: "#7950f2", color: "#fff" }}>Next</button>
      </div>
    </div>

  );
}
    






    














const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
