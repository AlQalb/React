import React, { useState } from 'react';
import { Button, Formbar, Input } from './styled';
function Form({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue('');
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <Formbar onSubmit={handleSubmit}>
      <Input
        type='text'
        onChange={onChange}
        value={inputValue}
        placeholder='add the to do'
      />
      <Button>add</Button>
    </Formbar>
  );
}

export default Form;
