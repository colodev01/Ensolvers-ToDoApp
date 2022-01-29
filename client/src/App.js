import React from 'react';
import './App.css';
import MainViewTodo from './components/MainViewTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <MainViewTodo />
    </div>
  );
}

export default App;