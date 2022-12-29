import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './Context/CartContext/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyDjx70bRrQ823iMEY7gjIBMtcnINhQQYgc",
  authDomain: "ecommerce-coder-a9c96.firebaseapp.com",
  projectId: "ecommerce-coder-a9c96",
  storageBucket: "ecommerce-coder-a9c96.appspot.com",
  messagingSenderId: "876613443472",
  appId: "1:876613443472:web:866071fd730c48ebc41d15",
  measurementId: "G-STSDGYLW39"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
