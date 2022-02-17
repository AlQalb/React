import React, { Component } from 'react';
import { HContainer, Hmenu } from './style.js';
import img from './images/Logo.png';
import search from './images/search.png';
import carry from './images/carry.png';
import btn from './images/btn.png';
import { navbar } from '../mock';
import GenericButton from '../Components/genericButton/Genericbutton.jsx';
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
              className={`notactive ${this.state.active === title && 'active'}`}
            >
              {title}
            </div>
          ))}
        </Hmenu>
        <Hmenu>
          <GenericButton height='35' width='24'>
            <img height='20' width='20' src={search} alt='search' />
          </GenericButton>
          <GenericButton height='35' width='24'>
            <img height='24' width='24' src={carry} alt='carry' />
          </GenericButton>
          <GenericButton
            color='white'
            height='35'
            width='100'
            brradius='6'
            bg='#46A358'
          >
            <img src={btn} alt='btn' /> Login
          </GenericButton>
        </Hmenu>
      </HContainer>
    );
  }
}
