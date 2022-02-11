import React, { Component } from 'react';
import { students } from './data';

export default class table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 15,
      data: students,
      option: 'id',
      name: '',
      status: '',
      selected: {},
    };
  }
  render() {
    const onDelete = (id) => {
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };
    const onFilter = (e) => {
      let res = students.filter((value) =>
        String(value[this.state.option])
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );

      this.setState({ data: res });
    };
    const onValueSelect = (e) => {
      this.setState({ option: e.target.value });
    };
    const onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    const onSave = () => {
      const newUser = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({
        data: [...this.state.data, newUser],
      });
    };
    const onSelect = (value) => {
      this.setState({
        selected: value,
        name: value.name,
        status: value.status,
      });
    };
    const onUpdate = () => {
      let res = students.map((value) =>
        value.id === this.state.selected.id
          ? { ...value, name: this.state.name, status: this.state.status }
          : value
      );
      this.setState({ data: res, selected: {} });
    };
    return (
      <div className='divtable'>
        <h2>search</h2>
        <select name='' id='' onChange={onValueSelect}>
          <option value='id'>Id</option>
          <option value='name'>Name</option>
          <option value='status'>Status</option>
          <option value='adress'>Adress</option>
          <option value='age'>Age</option>
        </select>
        <input type='text' onChange={onFilter} />
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Status</th>
              <th>Adress</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>
                  {this.state.selected.id === value.id ? (
                    <input
                      type='text'
                      name='name'
                      onChange={onChange}
                      value={this.state.name}
                    />
                  ) : (
                    value.name
                  )}
                </td>
                <td>
                  {this.state.selected.id === value.id ? (
                    <input
                      type='text'
                      name='status'
                      onChange={onChange}
                      value={this.state.status}
                    />
                  ) : (
                    value.status
                  )}
                </td>
                <td>{value.adress}</td>
                <td>{value.age}</td>
                <td>
                  <button onClick={() => onDelete(value.id)}>delete</button>
                  {this.state.selected.id === value.id ? (
                    <button onClick={onUpdate}>update</button>
                  ) : (
                    <button onClick={() => onSelect(value)}>edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input name='name' onChange={onChange} placeholder='name' type='text' />
        <input
          name='status'
          onChange={onChange}
          placeholder='status'
          type='text'
        />
        <button onClick={onSave}>add</button>
      </div>
    );
  }
}
