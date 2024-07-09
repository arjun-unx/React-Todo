import React from 'react';
import { useFetchTodos, useRemoveTodo } from '../hooks/useTodos';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = (handleRemove) => [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 150, editable: true },
  { field: 'description', headerName: 'Description', width: 200, editable: true },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <Button variant="contained" color="secondary" onClick={() => handleRemove(params.row.id)}>Delete</Button>
    ),
  },
];

const TodoTable = () => {
  const { data: todos, isLoading } = useFetchTodos();
  const { mutate: removeTodo } = useRemoveTodo();

  const handleRemove = (id) => {
    removeTodo(id);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={todos}
        columns={columns(handleRemove)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
};

export default TodoTable;
