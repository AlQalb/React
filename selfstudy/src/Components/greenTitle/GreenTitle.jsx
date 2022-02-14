import React, { Component } from 'react';
import { Title } from './style';
export default class GreenTitle extends Component {
  render() {
    const { color, children } = this.props;
    return <Title color={color}>{children}</Title>;
  }
}
