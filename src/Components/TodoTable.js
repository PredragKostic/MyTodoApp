import { TableContainer } from '@material-ui/core';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { Box } from '@mui/system';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import { deleteTodo } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TodoTable = ({setTodoId}) => {
  const todoList = useSelector((state) => state.allReducers.todoList);
  const dispatch = useDispatch();

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Task</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoList.map((elem) => {
              return (
                <TableRow key={elem.id}>
                  <TableCell>{elem.data.title}</TableCell>
                  <TableCell>{elem.data.task}</TableCell>
                  <TableCell>{elem.data.dueDate}</TableCell>
                  <TableCell>{elem.data.department}</TableCell>
                  <TableCell>
                    <Link to="/">
                    <BorderColorIcon
                      onClick={() => setTodoId(elem.id)}
                    />
                    </Link>
                  </TableCell>
                  <TableCell>
                    <DeleteOutlineIcon
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Link to="/">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          component={Paper}
          mt={2}
          minHeight="2rem"
        >
          <AddIcon />
          Add TODO
        </Box>
      </Link>
    </>
  );
};

export default TodoTable;
