import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addTodo } from '../actions';
import { Select, MenuItem } from '@material-ui/core';
import TextField from '@mui/material/TextField';
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
      inputData.id = new Date().getTime().toString();
      dispatch(addTodo(inputData));
      clear();
      navigate('/');
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
        <h3 className="heading">Create New Task</h3>
        <TextField
          type="text"
          placeholder="Title"
          className="todo-input"
          name="title"
          value={inputData.title}
          onChange={handleChange}
        />
        <TextField
          multiline
          rows={2}
          maxRows={4}
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
          {todoId ? 'Update Task' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};
export default TodoForm;
