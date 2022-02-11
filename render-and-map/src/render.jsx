import img from './img/me.jpg';
import img1 from './img/img.jpg';
import React, { Component } from 'react';
export default class render extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }
  render() {
    return (
      <div className='div'>
        <img
          src={this.state.active ? img : img1}
          alt='me'
          style={{ width: '200px', height: '200px' }}
        />
        {this.state.active ? <h1>Welcome Hayotbek</h1> : <h1>Pleace LogIn</h1>}
        <button onClick={() => this.setState({ active: !this.state.active })}>
          {this.state.active ? 'Log Out' : 'Log In'}
        </button>
      </div>
    );
  }
}
