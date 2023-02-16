const initialInput = {
  todoList: [],
  todoItem: null,
};

const allReducers = (state = initialInput, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { data, id } = action.payload;

      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: id,
            data: data,
          },
        ],
      };

    case 'UPDATE_TODO':
      state.todoList.map((elem) => {
        return elem.id === action.id ? (elem.data = action.data) : elem; //elem = elem
      });
      return {
        ...state,
        todoList: [...state.todoList],
      };

    case 'SET_TODO_ITEM':
      return {
        ...state,
        todoItem: state.todoList.find((elem) => elem.data.id === action.id),
      };

    case 'DELETE_TODO':
      const newTodoList = state.todoList.filter(
        (elem) => elem.id !== action.id
      );

      return {
        ...state,
        todoList: newTodoList,
      };

    default:
      return state;
  }
};

export default allReducers;
