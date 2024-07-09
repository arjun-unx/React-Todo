import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  const addTodo = (todo) => {
    setTodos((prev) => {
      const newTodos = [...prev, todo];
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const updateTodo = (updatedTodo) => {
    setTodos((prev) => {
      const newTodos = prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const removeTodo = (id) => {
    setTodos((prev) => {
      const newTodos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
