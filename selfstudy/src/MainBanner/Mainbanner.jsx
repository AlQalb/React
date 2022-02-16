import React, { Component } from 'react';
import { Banner } from './style';
import GreenTitle from '../Components/greenTitle/GreenTitle';
import GenericButton from '../Components/genericButton/Genericbutton';
import Img from '../images/img.png';
export default class Mainbanner extends Component {
  render() {
    return (
      <Banner>
        <Banner.Left>
          <Banner.Welcome>Welcome to GreenShop</Banner.Welcome>

          <Banner.Lets>
            Let’s Make a Better <GreenTitle>Planet</GreenTitle>
          </Banner.Lets>

          <Banner.Tekst>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </Banner.Tekst>
          <GenericButton mrtop={44} height='40' bg={'#46A358'} width='140'>
            SHOP NOW
          </GenericButton>
        </Banner.Left>
        <Banner.Right>
          <img id='firstimg' src={Img} alt='img' />
          <img id='twiceimg' src={Img} alt='img' />
        </Banner.Right>
      </Banner>
    );
  }
}
