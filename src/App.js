import React from 'react';
import TodoProvider from './context/TodoContext';
import AddTodo from './components/AddTodo';
import TodoTable from './components/TodoTable';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Container, Typography } from '@mui/material';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoProvider>
        <Container maxWidth="md" style={{ marginTop: '20px' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            TODO List Application
          </Typography>
          <AddTodo />
          <TodoTable />
        </Container>
      </TodoProvider>
    </QueryClientProvider>
  );
};

export default App;
