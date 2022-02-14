import styled from 'styled-components';

export const Title = styled.span`
  width: ${({ width }) => (width ? `${width}px` : 'fit-content')};
  height: ${({ height }) => (height ? `${height}px` : 'fit-content')};
  background: ${({ bg }) => (bg ? bg : '')};
  font-weight: ${({ weight }) => (weight ? `${weight}` : '600')};
  font-size: ${({ size }) => (size ? `${size}px` : '80px')};
  line-height: ${({ lheight }) => (lheight ? `${lheight}px` : '70px')};
  text-transform: ${({ Ttransform }) => Ttransform};
  color: ${({ color }) => (color ? color : 'black')};
  margin-bottom: 5px;
`;
