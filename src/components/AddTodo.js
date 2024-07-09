import React, { useState } from 'react';
import { useAddTodo } from '../hooks/useTodos';
import { TextField, Button } from '@mui/material';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { mutate: addTodo } = useAddTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Date.now().toString(),
      title,
      description,
    });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <Button type="submit" variant="contained" color="primary">Add TODO</Button>
    </form>
  );
};

export default AddTodo;
