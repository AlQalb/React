import React, { Component } from 'react';
import { Card, Image, Searchicon, Hearticon, Shopicon } from './styled';
import GreenTitle from '../greenTitle/GreenTitle';

export default class CardFlower extends Component {
  render() {
    const { value } = this.props;
    return (
      <Card>
        <Image src={value.src} />
        <Card.Group className='group'>
          <Shopicon />
          <Searchicon />
          <Hearticon />
        </Card.Group>
        <h4>{value.title} </h4>
        <GreenTitle>{value.price}$</GreenTitle>
      </Card>
    );
  }
}
