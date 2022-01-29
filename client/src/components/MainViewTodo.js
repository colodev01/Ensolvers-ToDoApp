import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function MainViewTodo() {
    const [todos, setTodos] = useState([]);
    const SERVER_URL = 'http://localhost:5001';

    useEffect(() => {getTodos()},[]);

    const getTodos = () => {
        fetch(SERVER_URL+'/todo',{
            method: 'get',
            headers: {'Content-Type': 'application/json'},
          })
          .then(async (res) => {
            const text = await res.text();
            return text === "" ? [] : JSON.parse(text)
          })
          .then((res) => {
            console.log(res)
            setTodos(res)})
          .catch(err => console.log("We got an error: ", err));
        }
    

    const addTodo = (description) => {
        fetch(SERVER_URL+'/todo',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                description: description
            })
          })
          .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
          })
          .catch(err => console.log("We got an error: ", err));
          setTimeout(()=>{getTodos()},100); 
    }

    const updateTodo = (id, description, done) => {
        fetch(SERVER_URL+'/todo',{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                done: done,
                description: description
            })
          })
          .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
          })
          .catch(err => console.log("We got an error: ", err));
          getTodos();
    }

    const deleteTodo = (id) => {
        fetch(SERVER_URL+'/todo',{
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id
            })
          })
          .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
          })
          .catch(err => console.log("We got an error: ", err));
          getTodos();
    }

    return(
        <div>
            <h1>To-Do List</h1>
            <TodoForm addTodo={addTodo}></TodoForm>
            <TodoList todos = {todos} deleteTodo = {deleteTodo} updateTodo = {updateTodo}/>
        </div>
    );
}

export default MainViewTodo;