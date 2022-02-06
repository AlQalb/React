import React, { Component } from 'react';

export default class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
    };
  }
  render() {
    const onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    return (
      <div className='divtest'>
        <h1>name:{this.state.name}</h1>
        <h1>surname:{this.state.surname}</h1>
        <input
          className='inputname'
          name='name'
          onChange={onChange}
          type='text'
        />
        <input name='surname' onChange={onChange} type='text' />
        <h1>----------------</h1>
      </div>
    );
  }
}
