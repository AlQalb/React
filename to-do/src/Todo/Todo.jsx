import { Button } from './styled';
import { Item } from './styled';
import { FaRegTrashAlt } from 'react-icons/fa';
function Todo({ todo, removeTask, toggleTask }) {
  console.log(removeTask);
  return (
    <Item key={todo.id} className='item-todo'>
      <Item.Text
        className={todo.complete ? 'done' : 'item-text'}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </Item.Text>
      <Button className='item-delete' onClick={() => removeTask(todo.id)}>
        <FaRegTrashAlt />
      </Button>
    </Item>
  );
}

export default Todo;
