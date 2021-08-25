import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import MainMenu from './components/MainMenu';
import Ajude from './components/Ajude'

export default function App() {
  return (
    <React.StrictMode>
      <NavBar />
      <MainMenu />
      <Ajude />
    </React.StrictMode>
  );
}


