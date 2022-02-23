import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/table';
function Root() {
  const [todos, setTodos] = useState([]);

  const addTask = (inputValue) => {
    if (inputValue) {
      const newItem = {
        id: todos.length + 1,
        task: inputValue,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  const onDelete = (id) => {
    setTodos([...todos.filter((value) => value.id !== id)]);
  };
  return (
    <div>
      <h5>Todo List</h5>
      <Form addTask={addTask} />
      {/* table */}
      {todos.map((value) => {
        return <Table value={value} onDelete={onDelete} />;
      })}
    </div>
  );
}

export default Root;
