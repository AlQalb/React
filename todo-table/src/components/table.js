import React from 'react';
import { Table, Task } from './styled';
function Tasktable({ value, onDelete, onEdit, editedvalue, onSelect, onSave }) {
  return (
    <Task>
      <Table>
        <Table.In>{value.id}</Table.In>
        <Table.In>{value.task}</Table.In>
        <Table.In>
          <button onClick={() => onDelete(value.id)}>delete</button>

          <button onClick={() => onEdit(value.id, value.task)}>edit</button>
        </Table.In>
      </Table>
      <Task.Updatebar className={value.visible ? 'visible' : ``}>
        <form>
          <input onChange={onSelect} value={editedvalue} type='text' />
          <button onClick={onSave}>save</button>
        </form>
      </Task.Updatebar>
    </Task>
  );
}

export default Tasktable;
