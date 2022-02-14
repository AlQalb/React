import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/header';
import Mainbanner from './MainBanner/Mainbanner';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Mainbanner />
  </React.StrictMode>,
  document.getElementById('root')
);
