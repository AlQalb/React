import React, { Component } from 'react';
import { card, sortcat, size, navbar } from '../mock';
import saleimg from '../images/Sale.jpg';
import CardFlower from '../Components/Card/Card';
import {
  Container,
  Sort,
  Herohome,
  Sortby,
  Filter,
  Catigories,
  Select,
  PriceRange,
  Input,
  Size,
  Saleimg,
  Pagenumber,
} from './styled ';
import GreenTitle from '../Components/greenTitle/GreenTitle';
import GenericButton from '../Components/genericButton/Genericbutton';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
      activee: 1,
      activeee: 1,
      activenumber: 1,
      data: card,
      sortmenu: sortcat,
      sizemenu: size,
      number: navbar,
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
          <Size>
            <h3>Size</h3>
            {this.state.sizemenu.map(({ id, title, number }) => (
              <Size.Menu
                onClick={() => this.setState({ active: id })}
                className={` ${this.state.active === id && 'activeee'}`}
              >
                <div>{title}</div>
                <div>({number})</div>
              </Size.Menu>
            ))}
          </Size>
          <Saleimg src={saleimg} />
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
              <CardFlower value={value} />
            ))}
          </Container>
          <Pagenumber>
            {this.state.number.map(({ id }) => (
              <Pagenumber.Number
                onClick={() => this.setState({ activenumber: id })}
                className={` ${this.state.activenumber === id && 'activee'}`}
              >
                {id}
              </Pagenumber.Number>
            ))}
            <Pagenumber.Number className={'Next'}>{'<'}</Pagenumber.Number>
          </Pagenumber>
        </Sort>
      </Herohome>
    );
  }
}
