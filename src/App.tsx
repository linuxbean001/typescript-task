import React from 'react';
import User from './components/User';
import { Button } from 'react-bootstrap';
import './App.css';

interface Todo {
  text: string;
  complete: boolean;
}
const todos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  return (
    // <ul>
    //   <TodoListItem todo={todos[0]} />
    //   <TodoListItem todo={todos[1]} />
    // </ul>
    <User/>
  );
}

export default App;
