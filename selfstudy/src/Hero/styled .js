import styled from 'styled-components';
import { ReactComponent as Search } from '../images/search.svg';
import { ReactComponent as Heart } from '../images/heart.svg';
import { ReactComponent as Shop } from '../images/shop.svg';

export const Herohome = styled.div`
  margin-top: 46px;
  width: 100%;
  display: flex;
  column-gap: 54px;
`;

export const Sort = styled.div`
  flex: 1;
  width: 840px;
`;
export const Sortby = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 23px;
  .activee {
    border-bottom: 2px solid #169616;
    color: #169616;
    transition: all 0.2s;
  }
`;

Sortby.Left = styled.div`
  display: flex;
`;
Sortby.Category = styled.div`
  margin-right: 37px;
  font-size: 15px;

  cursor: pointer;
`;

Sortby.Right = styled.div`
  font-size: 15px;
`;

export const Select = styled.select`
  border: 0px;
`;
export const Filter = styled.div`
  border: 2px solid black;
  background: #fbfbfb;
  width: 310px;
  height: 774px;
`;

export const Catigories = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;

  height: 383px;
  margin: 14px 24px 36px 18px;
  .active {
    color: #169616;
    transition: all 0.2s;
  }
`;
Catigories.Menu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 12px;
  font-style: normal;
  font-size: 15px;
  cursor: pointer;
`;

export const PriceRange = styled.div`
  margin: 14px 24px 36px 18px;
`;
PriceRange.Range = styled.div`
  margin-left: 12px;
  width: 226px;
  height: 133px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Input = styled.input.attrs({ type: `range` })`
  -webkit-appearance: none;

  ::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #46a358;
    margin-top: -4px;
  }
  :focus {
    outline: none;
  }

  :focus::-webkit-slider-runnable-track {
    background: #ccc;
  }
`;
PriceRange.Range.p = styled.p`
  font-size: 15px;
  line-height: 16px;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 1190px;
  gap: 30px;
`;

export const Card = styled.div`
  width: 250px;
  height: 300px;
  background: #fbfbfb;
  margin: 34px 4px 19px 4px;

  .group {
    visibility: hidden;
    align-items: center;
    column-gap: 150px;
    transition: all 0.5s;
  }
  :hover {
    .group {
      height: 35px;
      visibility: visible;

      column-gap: 26px;
    }
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 250px;
`;
Card.Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 26px;
  margin-bottom: 15px;
  width: 100%;
  height: 35px;
`;

export const Searchicon = styled(Search)`
  height: 19px;
  width: 19px;
  :hover {
    cursor: pointer;
  }
  :active {
    path {
      fill: #46a358;
    }
  }
`;
export const Hearticon = styled(Heart)`
  height: 20px;
  width: 18px;
  :hover {
    cursor: pointer;
  }
  :active {
    path {
      fill: red;
    }
  }
`;

export const Shopicon = styled(Shop)`
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }
  :active {
    path {
      fill: #46a358;
    }
  }
`;
