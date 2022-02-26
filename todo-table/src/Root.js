import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/table';
import { Container } from './styled';
function Root() {
  const [todos, setTodos] = useState([]);
  const [editedValue, seteditedValue] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const addTask = (inputValue) => {
    if (inputValue) {
      const newItem = {
        id: todos.length + 1,
        task: inputValue,
        complete: false,
        visible: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  const onSelect = (e) => {
    seteditedValue(e.target.value);
  };
  const onEdit = (id, task) => {
    seteditedValue(task);
    setSelectedId(id);
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, visible: !todo.visible } : { ...todo }
      ),
    ]);
  };

  const onSave = (e) => {
    e.preventDefault();
    let newTask = todos.map((value) =>
      value.id === selectedId
        ? { ...value, task: editedValue, visible: false }
        : value
    );

    setTodos(newTask);
    setSelectedId(null);
  };
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };
  const onDelete = (id) => {
    setTodos([...todos.filter((value) => value.id !== id)]);
  };
  return (
    <Container>
      <h4>Todo List</h4>
      {/* <p>{new Date().getHours() }</p> */}
      <Form addTask={addTask} />

      {todos.map((value) => {
        return (
          <Table
            onSave={onSave}
            selectedId={selectedId}
            editedvalue={editedValue}
            value={value}
            onEdit={onEdit}
            onDelete={onDelete}
            onSelect={onSelect}
            toggleTask={handleToggle}
          />
        );
      })}
    </Container>
  );
}

export default Root;
