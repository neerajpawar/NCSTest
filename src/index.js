import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './App';
//import Demo from './Demo';
import Header from './Header';
import Filter from './Filter';
import Movie from './Movie';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Filter />
    <Movie />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
