import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
this file is grabbing the html div called root, and selecting it, and saying thats the root of this application. this is a dom method, it means html, its this document.getElementById('root'), onyl ever one html file. line 10 is creating where the route goes. line 11 is actually doing the render 
YOU;RE ONLY GOING TO RENDER MY TOP LEVEL COMPONENT HERE, APP.JS DONT PUT OTHER COMPONENTS HERE
where are we going to render? and what are we goign to render? */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
