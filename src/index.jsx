import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import App from './App'




// const GlobalStyle = createGlobalStyle`
//     *{
//       margin: 0;
//       padding: 0;
//     }
//     div {
//         margin: 0;
//         padding: 10px;
//         font-family: 'Trebuchet MS', Helvetica, sans-serif;
//     }
// `


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
