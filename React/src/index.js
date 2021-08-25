import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import MainMenu from './components/MainMenu';
import Ajude from './components/Ajude'


ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <MainMenu />
    <Ajude />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
