import React, { Component } from 'react';
import { Header, Navbar, Button } from './sytle';
import logo from './images/Logo.png';
import { navbar } from './mock';
import search from './images/search.png';
import carry from './images/carry.png';
import btn from './images/btn.png';
export default class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: navbar,
      active: 'Home',
    };
  }
  render() {
    return (
      <Header>
        <img height={34} src={logo} alt='Logo' />
        <Navbar>
          {this.state.data.map(({ title }) => (
            <div
              onClick={() => this.setState({ active: title })}
              className={`link ${this.state.active === title && 'active'}`}
            >
              {title}
            </div>
          ))}
        </Navbar>
        <div className='navbarbtncontainer'>
          <img
            height={20}
            width={20}
            className='navbarbtn'
            src={search}
            alt=''
          />
          <img
            height={24}
            width={24}
            className='navbarbtn'
            src={carry}
            alt=''
          />
          <Button className='navbarbtn'>
            <img src={btn} alt='BTN'></img>login
          </Button>
        </div>
      </Header>
    );
  }
}
