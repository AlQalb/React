import React, { Component } from 'react';

export default class table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
        {
          id: 2,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
        {
          id: 4,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
        {
          id: 5,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
        {
          id: 6,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
        {
          id: 7,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
        {
          id: 8,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
        {
          id: 9,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
        {
          id: 10,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
        {
          id: 11,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
        {
          id: 12,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
        {
          id: 13,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
        {
          id: 14,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
        {
          id: 15,
          name: 'Hayotbek',
          Status: 'Student',
          adress: 'Qashqadarya',
          age: '22',
        },
      ],
    };
  }
  render() {
    const Ondelete = (id) => {
      let del = this.state.list.filter((value) => value.id !== id);
      this.setState({ list: del });
    };
    return (
      <div>
        <div className='table'>
          <div className='tablehead'>
            <div className='th' id='id'>
              Id
            </div>
            <div className='th'>Name</div>
            <div className='th'>Status</div>
            <div className='th'>Adress</div>
            <div className='th'>Age</div>
            <div className='th'>Delete</div>
          </div>
          <div className='tablebody'>
            {this.state.list.map((value) => (
              <div className='tablecontent'>
                <div className='th , id'>{value.id}</div>
                <div className='th'>{value.name}</div>
                <div className='th'>{value.Status}</div>
                <div className='th'>{value.adress}</div>
                <div className='th'>{value.age}</div>
                <div className='th'>
                  <button onClick={() => Ondelete(value.id)}>delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
