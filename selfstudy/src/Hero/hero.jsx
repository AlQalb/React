import React, { Component } from 'react';
import { card } from '../mock';
import {
  Container,
  Card,
  Image,
  Searchicon,
  Hearticon,
  Shopicon,
  Sort,
  Herohome,
  Sortby,
  Catigories,
} from './styled ';
import GreenTitle from '../Components/greenTitle/GreenTitle';

export default class Hero extends Component {
  state = {
    data: card,
  };
  render() {
    return (
      <Herohome>
        <Catigories>Catigories</Catigories>
        <Sort>
          <Sortby>sort</Sortby>
          <Container>
            {this.state.data.map((value) => (
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
            ))}
          </Container>
        </Sort>
      </Herohome>
    );
  }
}
