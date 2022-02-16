import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/header';
import Mainbanner from './MainBanner/Mainbanner';
import Hero from './Hero/hero';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Mainbanner />
    <Hero />
  </React.StrictMode>,
  document.getElementById('root')
);
