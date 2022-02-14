import styled from 'styled-components';

export const Title = styled.h1``;
export const HContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  /* border: 1px solid green; */
  width: 100%;
  height: 53px;
`;

export const Hmenu = styled.div`
  display: flex;
  #kid {
    padding-top: 8px;
    margin-right: 50px;
    height: 53px;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    :hover {
      border-bottom: 3px solid #169616;
    }
  }
`;
