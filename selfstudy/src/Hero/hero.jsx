import React, { Component } from 'react';
import { card, sortcat } from '../mock';
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
  Filter,
  Catigories,
  Select,
  PriceRange,
  Input,
} from './styled ';
import GreenTitle from '../Components/greenTitle/GreenTitle';
import GenericButton from '../Components/genericButton/Genericbutton';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
      activee: 1,
      data: card,
      sortmenu: sortcat,
    };
  }

  render() {
    return (
      <Herohome>
        <Filter>
          <Catigories>
            <h3>Catigories</h3>
            {this.state.data.map(({ title, number, id }) => (
              <Catigories.Menu
                onClick={() => this.setState({ active: id })}
                className={` ${this.state.active === id && 'active'}`}
              >
                <div>{title}</div> <div>({number})</div>
              </Catigories.Menu>
            ))}
          </Catigories>
          <PriceRange>
            <h3>Price Range</h3>
            <PriceRange.Range>
              <Input />
              <PriceRange.Range.p>
                Price:<GreenTitle> $39 - $1230 </GreenTitle>
              </PriceRange.Range.p>
              <GenericButton height={35} width={90} bg={'#46a358'}>
                Filter
              </GenericButton>
            </PriceRange.Range>
          </PriceRange>
        </Filter>
        <Sort>
          <Sortby>
            <Sortby.Left>
              {this.state.sortmenu.map(({ title, id }) => (
                <Sortby.Category
                  onClick={() => this.setState({ activee: id })}
                  className={` ${this.state.activee === id && 'activee'}`}
                >
                  {title}
                </Sortby.Category>
              ))}
            </Sortby.Left>
            <Sortby.Right>
              Sort by :
              <Select name='Default sorting' id='cars'>
                <option value='Flower'>Default sorting</option>
                <option value='Flower'>Flower</option>
                <option value='Flower'>Flower</option>
                <option value='Flower'>Flower</option>
              </Select>
            </Sortby.Right>
          </Sortby>

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
