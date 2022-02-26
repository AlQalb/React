import React from 'react';
import { Table, Task, Button, Input, Formbar } from './styled';
function Tasktable({
  value,
  onDelete,
  onEdit,
  editedvalue,
  onSelect,
  onSave,
  toggleTask,
}) {
  return (
    <Task>
      <Table>
        <Table.Id className={value.complete ? 'done' : `Taskbar`}>
          {value.id}
        </Table.Id>
        <Table.Task
          onClick={() => toggleTask(value.id)}
          className={value.complete ? 'done' : `Taskbar`}
        >
          {value.task}
        </Table.Task>
        <Table.Btn className={`Taskbar`}>
          <Button className={'editbtn'} onClick={() => onDelete(value.id)}>
            delete
          </Button>

          <Button
            className={'editbtn'}
            onClick={() => onEdit(value.id, value.task)}
          >
            edit
          </Button>
        </Table.Btn>
      </Table>
      <Task.Updatebar className={value.visible ? 'visible' : ``}>
        <Formbar>
          <Input onChange={onSelect} value={editedvalue} type='text' />
          <Button onClick={onSave}>save</Button>
        </Formbar>
      </Task.Updatebar>
    </Task>
  );
}

export default Tasktable;
