import React, { Component } from 'react';
import {navbar} from './mock'
export default class active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
    };
  }
  render() {
    return (
      <div className='navbar'>
        {navbar.map(({ title, id }) => (
          <h1
            key={id}
            onClick={() => this.setState({ active: title })}
            className={`notactive ${this.state.active === title && 'active'}`}
          >
            {title}
          </h1>
        ))}
      </div>
    );
  }
}
