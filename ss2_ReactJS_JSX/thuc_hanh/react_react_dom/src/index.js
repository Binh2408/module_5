import React from 'react';
import ReactDOM from 'react-dom/client';

// const name = "Bình";
// const root = ReactDOM.createRoot(document.getElementById("root"));
//Nhúng bằng createElement
// root.render(
//   React.createElement("h1",{style: {textAlign:"center"}},name)
// );

//Nhúng bằng JSX
// root.render(
//   <h1 style={{textAlign:'center',color: 'red'}}>
//     {name}
//   </h1>
// );

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Apricot",
  "Black rowan",
  "Cranberry"
];
const root = ReactDOM.createRoot(document.getElementById("root"));
const tick = () => {
root.render(
  <div>
    <h1>List of fruits</h1>
    <ul>
      {fruits.map((item,index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
    <h4>Browser's details: {navigator.userAgent}</h4>

  </div>
);

};
setInterval(tick,1000);










// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();









