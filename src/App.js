import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TodoForm from './Components/TodoForm';
import TodoTable from './Components/TodoTable';
import { useState } from 'react';
import TodoEditForm from './Components/TodoEditForm';

function App() {
  const [todoId, setTodoId] = useState(null);
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/tasks/create' exact element={<TodoForm todoId={todoId} setTodoId={setTodoId}/>} />
    <Route path='/tasks/edit/:id' exact element={<TodoEditForm/>} />
    <Route path='/' exact element={<TodoTable setTodoId={setTodoId}/>}  />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
