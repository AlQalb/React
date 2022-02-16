import styled from 'styled-components';
import { ReactComponent as Search } from '../images/search.svg';
import { ReactComponent as Heart } from '../images/heart.svg';
import { ReactComponent as Shop } from '../images/shop.svg';

export const Herohome = styled.div`
  margin-top: 46px;
  width: 100%;
  display: flex;
  column-gap: 75px;
`;

export const Sort = styled.div`
  flex: 1;
  width: 840px;
`;
export const Sortby = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 23px;
`;

export const Catigories = styled.div`
  border: 2px solid black;

  width: 360px;
  height: 774px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 1190px;
  gap: 71px;
`;

export const Card = styled.div`
  width: 270px;
  height: 320px;
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
  height: 270px;
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
`;
export const Hearticon = styled(Heart)`
  height: 20px;
  width: 18px;
`;

export const Shopicon = styled(Shop)`
  height: 20px;
  width: 20px;
  :hover {
    fill: red;
  }
`;
