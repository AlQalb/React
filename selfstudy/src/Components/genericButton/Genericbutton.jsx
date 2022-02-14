import React, { Component } from 'react';
import { Button } from './style';
export default class GenericButton extends Component {
  render() {
    const {  color, children, width, height, bg, brradius,mrtop } = this.props;
    return (
      <Button bg={bg} mrtop={mrtop} color={color} brradius={brradius} width={width} height={height}>
        {children}
      </Button>
    );
  }
}
