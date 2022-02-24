import styled from 'styled-components';

export const Task = styled.div`
  border: 1px solid black;
  margin-bottom: 20px;
  .visible {
    display: flex;
  }
`;
Task.Updatebar = styled.div`
  display: none;
`;
export const Table = styled.div`
  display: flex;
  justify-content: space-around;

  width: 400px;
`;

Table.In = styled.div`
  border: 1px solid black;
`;
