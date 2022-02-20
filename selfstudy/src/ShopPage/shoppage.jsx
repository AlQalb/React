import React, { Component } from 'react';
import Product from './Product/Product';
import Description from './Description/Description';

export default class shoppage extends Component {
  render() {
    return (
      <div>
        <Product />
        <Description />
      </div>
    );
  }
}
