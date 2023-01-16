import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo, updateTodo } from '../actions';
import { Select, MenuItem } from '@material-ui/core';
import './TodoForm.css';

const TodoForm = ({ todoId, setTodoId }) => {
  const [inputData, setInputData] = useState({
    title: '',
    task: '',
    dueDate: '',
    department: ''
  });

 
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.title && inputData.task && inputData.dueDate && inputData.department !== '') {
      if (todoId === null) {
        dispatch(addTodo(inputData));
      } else {
        dispatch(updateTodo(todoId, inputData));
      }
      clear();
      navigate('/table');
    }
  };

  const clear = () => {
    setTodoId(null);
    setInputData(null);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  
  return (
    <div>
      <form className="todo-form">
        <h3 className="heading">{todoId ? 'Update Form' : 'Todo Form'}</h3>
        <input
          type="text"
          placeholder="Title"
          className="todo-input"
          name="title"
          value={inputData.title}
          onChange={handleChange}
        />
        <textarea
          type="message"
          placeholder="Task"
          className="todo-input"
          name="task"
          value={inputData.task}
          onChange={handleChange}
        />
        <Select
        
        name="department"
          value={inputData.department}
          displayEmpty
          placeholder="Department"
          onChange={handleChange}
        >
          <MenuItem value="" disabled>
            Choose Department
          </MenuItem>
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Home">Home</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        <input
          type="date"
          placeholder="Due Date"
          className="todo-input"
          name="dueDate"
          value={inputData.dueDate}
          onChange={handleChange}
        />
        <button className="todo-button" onClick={handleSubmit}>
          {todoId ? 'Update Todo' : 'Add Todo'}
        </button>
      </form>
    </div>
  );
};
export default TodoForm;
