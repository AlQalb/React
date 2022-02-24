import React, { useState } from 'react';

function Form({ addTask }) {
  const [inputValue, setInputValue] = useState('');
  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={onChange}
        value={inputValue}
        placeholder='add the to do'
      />
      <button>add</button>
    </form>
  );
}

export default Form;
