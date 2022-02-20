import styled from 'styled-components';

export const Herohome = styled.div`
  margin-top: 46px;
  width: 100%;
  display: flex;
  column-gap: 54px;
`;

export const Sort = styled.div`
  flex: 1;
  width: 840px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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

export const Size = styled.div`
  width: 268px;
  height: 143px;
  display: flex;
  flex-direction: column;
  margin: 14px 24px 0px 18px;
  justify-content: space-evenly;
  .activeee {
    color: #169616;
    transition: all 0.2s;
  }
`;
Size.Menu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 12px;
  font-style: normal;
  font-size: 15px;
  cursor: pointer;
`;
export const Filter = styled.div`
  background: #fbfbfb;
  width: 310px;
  height: 774px;
`;

export const Catigories = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px 24px 36px 18px;
  justify-content: space-evenly;

  height: 383px;

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
PriceRange.Range.p = styled.p`
  font-size: 15px;
  line-height: 16px;
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
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 1190px;
  gap: 30px;
`;

export const Saleimg = styled.img`
  width: 310px;
  height: 470px;
`;

export const Pagenumber = styled.div`
  margin-top: 90px;
  display: flex;
  width: 215px;
  height: 35px;
  .activee {
    background-color: #169616;
    transition: all 0.2s;
    color: white;
    border: 0px;
  }
  .Next {
    :active {
      background-color: #169616;
      color: white;
    }
  }
`;
Pagenumber.Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 35px;
  height: 35px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
`;
