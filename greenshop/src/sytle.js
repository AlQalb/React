import styled from 'styled-components';
export const Header = styled.div`
  width: 1200px;
  height: 53px;
  border-bottom: 1px solid green;
  display: flex;
  justify-content: space-between;
`;
export const Navbar = styled.div`
  display: flex;
  /* border: 1px solid red; */
`;
export const Navbartxt = styled.div`
  margin-right: 50px;
  font-family: Cera Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  :active {
    border-bottom: 3px solid green;
  }
  cursor: pointer;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  background: #46a358;
  border-radius: 6px;
  text-align: center;
  color: white;
  :active {
    transform: translateY(1.5px);
  }
  cursor: pointer;
`;
export const Banner = styled.div`
  width: 1200px;
  height: 450px;
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5) -23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );
  margin-top: 12px;
  display: flex;
  padding: 0px 40px;
  position: relative;
`;
export const Bannerimg = styled.img`
  position: absolute;
  width: 145px;
  height: 145px;
  left: 753px;
  top: 277px;
`;
export const H1 = styled.div`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 950;
  font-size: 60px;
  line-height: 60px;
  width: 530px;
  height: 140px;
  text-transform: uppercase;
`;
