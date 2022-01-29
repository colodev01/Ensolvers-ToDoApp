import { List } from '@mui/material';
import React, {useState} from 'react';
import Todo from './Todo';

function TodoList({todos, deleteTodo, updateTodo}) {
    return (
        <div>
            <List>
              {todos.map(todo => {
                  return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo = {updateTodo} />
              })}
            </List>
        </div>
    );
}

export default TodoList;