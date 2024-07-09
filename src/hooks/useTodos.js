import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useTodo } from '../context/TodoContext';

const fetchTodos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.parse(localStorage.getItem('todos')) || []);
    }, 1000);
  });
};

export const useFetchTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  const { addTodo } = useTodo();

  return useMutation({
    mutationFn: (newTodo) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          addTodo(newTodo);
          resolve(newTodo);
        }, 1000);
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    }
  });
};

export const useRemoveTodo = () => {
  const queryClient = useQueryClient();
  const { removeTodo } = useTodo();

  return useMutation({
    mutationFn: (id) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          removeTodo(id);
          resolve(id);
        }, 1000);
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    }
  });
};
