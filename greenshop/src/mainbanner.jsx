import React, { Component } from 'react';
import { Banner, Bannerimg, Button, H1 } from './sytle';

import img from './images/img.png';

export default class mainbanner extends Component {
  render() {
    return (
      <Banner>
        <div className='inbanner, inbannertext , '>
          <div>
            <p>Welcome to GreenShop</p>
            <H1  >Let’s Make a Better Planet</H1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
          </div>
          <Button className='btnshop'>SHOP NOW</Button>
        </div>
        <div className='inbanner , imgbanner'>
          <Bannerimg src={img} alt='foto' />
          <img src={img} alt='foto' width={450} height={450} />
        </div>
      </Banner>
    );
  }
}
