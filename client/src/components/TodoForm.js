import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function TodoForm({addTodo}) {
    const [todoName, setTodoName] = useState("");

    const handleTodoName = (e) => {
        setTodoName(e.target.value);
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo(todoName);
        setTodoName("");
    }

    return (
        <div className="todo-form">
            <TextField
                name="text"
                type="text"
                size="small"
                style={{ margin: 8 }}
                value={todoName}
                onChange={handleTodoName}
            />
            <Button style={{ margin: 8 }} variant="contained" color="primary" onClick={handleAddTodo}>Add Todo</Button>
        </div>
    );
}

export default TodoForm;