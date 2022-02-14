import styled from 'styled-components';

export const Banner = styled.div`
  display: flex;

  width: 100%;
  height: 450px;
  margin-top: 12px;
  padding: 20px 40px;

`;
Banner.Left = styled.div`
  border: 2px solid red;
  padding-top: 68px;
  flex: 1;
`;
Banner.Right = styled.div`
  border: 2px solid red;
  padding-top: 68px;
  flex: 1;
`;

Banner.Planet = styled.span`
  color: #46a358;
`;

Banner.Welcome = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #3d3d3d;
`;
Banner.Lets = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 70px;
  width: 530px;
  height: 140px;
  text-transform: uppercase;

  color: #3d3d3d;
`;

Banner.Tekst = styled.div`
  width: 557px;
  height: 45px;
  font-family: Cera Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  margin-top: 5px;
`;
