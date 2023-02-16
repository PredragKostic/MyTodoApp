export const addTodo = (data) => {
  return {
    type: 'ADD_TODO',
    payload: {
      data: data,
    },
  };
};

export const updateTodo = (id, data) => {
  return {
    type: 'UPDATE_TODO',
    id: id,
    data: data,
  };
};

export const setTodoItem = (id) => {
  return {
    type: 'SET_TODO_ITEM',
    id: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id: id,
  };
};
