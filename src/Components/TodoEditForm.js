import React, { useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import { setTodoItem, updateTodo } from '../actions';
import { Select, MenuItem } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';

function TodoEditForm ()  {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    dispatch(setTodoItem(params.id));
    const todoItem = useSelector((state) => state.allReducers.todoItem);

    const [inputData, setInputData] = useState({
        title: todoItem.data.title,
        task: todoItem.data.task,
        dueDate: todoItem.data.dueDate,
        department: todoItem.data.department
      });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInputData({
          ...inputData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (inputData.title && inputData.task && inputData.dueDate && inputData.department !== '') {
          dispatch(updateTodo(todoItem.id, inputData));
          alert('updated');
          navigate('/');
        }
      };

    return (
        <div>
          <form className="todo-form">
            <h3 className="heading">Update Task</h3>
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
              {'Update Task'}
            </button>
          </form>
        </div>
      );
}

export default TodoEditForm;
