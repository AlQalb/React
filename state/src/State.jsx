import React, { Component } from 'react';

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: ' ',
      surname: ' ',
    };
  }
  render() {
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      this.setState({ count: this.state.count - 1 });
    };
    const onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <hr />
        <h1>name:{this.state.name}</h1>
        <h1>surname:{this.state.surname}</h1>
        <input
          name='name'
          onChange={onChange}
          type='text'
          placeholder='enter your name'
        />
        <input
          name='surname'
          onChange={onChange}
          type='text'
          placeholder='enter your surname'
        />
      </div>
    );
  }
}
