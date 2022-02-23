import React, { useState } from 'react';
import { Form, Button, Input } from './styled';
import { GiSaveArrow } from 'react-icons/gi';
function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState('');
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     handleSubmit(e);
  //   }
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={userInput}
        type='text'
        onChange={handleChange}
        // onKeyDown={handleKeyPress}
        placeholder='Topshiriqni kirgizing...'
      />
      <Button>
        <GiSaveArrow />
      </Button>
    </Form>
  );
}

export default TodoForm;
