import React, { Component } from 'react';

export default class update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'hayotbek' },
        { id: 2, name: 'Khabibullo' },
      ],
      name: '',
    };
  }

  update = (id) => {
    const toUpdate = this.state.data?.filter((d) => d.id === id)[0];

    toUpdate.name = this.state.name;

    this.setState({
      ...this.state,
      data: [...this.state.data?.filter((d) => d.id !== id), toUpdate],
    });
  };

  change = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        {this.state.data?.map((d) => {
          return (
            <div key={d.id}>
              <h1>{d.name}</h1>

              <input type='text' name='name' onChange={this.change} />

              <button onClick={() => this.update(d.id)}>update</button>
            </div>
          );
        })}
      </div>
    );
  }
}
