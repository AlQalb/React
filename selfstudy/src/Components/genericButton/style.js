import styled from 'styled-components';

export const Button = styled.div`
  width: ${({ width }) => (width ? `${width}px` : '20px')};
  height: ${({ height }) => (height ? `${height}px` : '20px')};
  background: ${({ bg }) => (bg ? bg : 'white')};
  border-radius: ${({ brradius }) => (brradius ? `${brradius}px` : '6px')};
  color: ${({ color }) => (color ? color : 'white')};
  text-transform: ${({ Ttransform }) => Ttransform};
  margin-left: 30px;
  margin-top: ${({ mrtop }) => (mrtop ? `${mrtop}px` : '0px')};
  display: flex;
  align-items: center;
  justify-content: center;

  :active {
    transform: translateY(1.5px);
  }
`;
