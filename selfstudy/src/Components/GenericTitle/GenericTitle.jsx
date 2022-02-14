import React, { Component } from 'react';
import { Title } from './style';
export default class GenericTitle extends Component {
  render() {
    const {
      color,
      children,
      width,
      height,
      bg,
      size,
      weight,
      lheight,
      Ttransform,
    } = this.props;
    return (
      <Title
        Ttransform={Ttransform}
        size={size}
        weight={weight}
        lheight={lheight}
        bg={bg}
        color={color}
        width={width}
        height={height}
      >
        {children}
      </Title>
    );
  }
}
