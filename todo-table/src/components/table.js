import React, { useState } from 'react';
import { Table } from './styled';
function table({ value, onDelete }) {
  return (
    <Table>
      <Table.In>{value.id}</Table.In>
      <Table.In>{value.task}</Table.In>
      <Table.In>
        <button onClick={() => onDelete(value.id)}>delete</button>
      </Table.In>
    </Table>
  );
}

export default table;
