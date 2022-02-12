import React, { Component } from 'react';
import { Title, HContainer, Hmenu } from './style.js';
import img from './images/Logo.png';
import { navbar } from '../mock';
export default class header extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 'Home' };
  }
  render() {
    return (
      <HContainer>
        <img src={img} alt='logo' />

        <Hmenu>
          {navbar.map(({ id, title }) => (
            <div
              id='kid'
              onClick={() => this.setState({ active: title })}
              className={`notactive ${this.state.active === title && `active`}`}
            >
              {title}
            </div>
          ))}
        </Hmenu>
        <Title>header</Title>
      </HContainer>
    );
  }
}
