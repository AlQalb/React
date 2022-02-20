import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  width: 100%;
  .done {
    background-color: lime;
    color: purple;
  }
`;
Item.Text = styled.div`
  width: 100%;
  background-color: white;
  color: black;
  margin-bottom: 3px;
  border-radius: 4px 0px 0px 4px;
  border: 1px solid white;
  font-size: 10px;
  height: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  text-align: center;
  margin: 20px 0px;
  width: 100%;
`;
export const Button = styled.button`
  background: none;
  border-radius: 0px 4px 4px 0px;
  border: 0px;
  height: 20px;
  width: 25px;
  font-size: 10px;
  font-weight: bold;
  background-color: black;
  color: white;
  :active {
    background-color: white;
    color: black;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 20px;
  border: 0px;
  font-size: 10px;
  border-radius: 4px 0px 0px 4px;
  outline: 1px solid lime;
`;
