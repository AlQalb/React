import styled from 'styled-components';

export const Formbar = styled.form`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  width: 100%;
`;
export const Task = styled.div`
  /* border: 2px solid white; */
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: grey;

  .visible {
    display: flex;
    height: 40px;
    transition: 3s;
  }
`;
Task.Updatebar = styled.div`
  display: none;
  height: 0px;
`;
export const Table = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  .done {
    background-color: lime;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    text-align: center;

    color: white;
    font-size: 20px;
  }
  .Taskbar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    text-align: center;

    color: white;
    font-size: 20px;
  }
`;

Table.Id = styled.div`
  width: 10%;
  border-radius: 5px;
  border: 2px solid white;
  background-color: black;
`;
Table.Task = styled.div`
  width: 70%;
  background-color: black;
  border-radius: 5px;
  border: 2px solid white;
`;
Table.Btn = styled.div`
  width: 20%;
  .editbtn {
    border-radius: 5px;
    width: 39px;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 0px;
  font-size: 18px;
  background-color: black;
  color: white;
  border-radius: 4px 0px 0px 4px;
  outline: 2px solid white;
`;
export const Button = styled.button`
  background: none;
  border-radius: 0px 4px 4px 0px;
  border: 2px solid white;
  /* border-top: 2px solid white;
  border-bottom: 2px solid white;
  border-right: 2px solid white; */
  height: 33px;
  width: 35px;
  font-size: 10px;
  font-weight: bold;
  background-color: black;
  color: white;

  :active {
    background-color: white;
    color: black;
  }
`;
