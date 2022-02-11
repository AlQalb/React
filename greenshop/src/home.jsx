import React, { Component } from 'react';
import Header from './header';
import Mainbanner from './mainbanner';
export default class home extends Component {
  render() {
    return (
      <div className='home'>
        <Header />
        <Mainbanner />
      </div>
    );
  }
}
