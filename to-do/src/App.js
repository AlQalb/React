import { useState } from 'react';
import { Body } from './styled';
import Todo from './Todo/Todo';
import TodoForm from './Todo/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: todos.length + 1,
        task: userInput,
        complete: false,
      };

      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };
  return (
    <Body className='App'>
      <header>
        <h5>TOPSHIRIQLAR SONI: {todos.length} </h5>
      </header>
      <TodoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </Body>
  );
}

export default App;
