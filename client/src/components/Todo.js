import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, Modal, TextField } from '@mui/material';

function Todo({todo, deleteTodo, updateTodo}) {
    const { id, description, done } = todo;
    const [open, setOpen] = useState(false);
    let todoDescModal = '';
    
    const handleDeleteTodo = () => {
        deleteTodo(id);
    }

    const handleUpdateDoneTodo = () => {
        updateTodo(id,description,!done);
    }

    const handleUpdateDescriptionTodo = () => {
        updateTodo(id,todoDescModal,done);
        handleClose();
    }

    const updateNewDescTodoForm = (e) => {
        todoDescModal = e.target.value
    }

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    return (

        <div>
            <List>
                <ListItem>
                    <p>{description} || Done: </p>
                    <input type='checkbox' checked={done} onChange={handleUpdateDoneTodo}/>
                </ListItem>
                <ListItem>
                    <Button style={{ margin: 8 }} variant="outlined" color="error" size="small" onClick={handleDeleteTodo}>Remove</Button>
                    <Button style={{ margin: 8 }} variant="outlined" size="small" onClick={handleClickOpen}>Change text</Button>
                </ListItem>
            </List>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update todo</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please, write a new description for your task
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="txtNewDesc"
                    label="Description"
                    placeholder= {description}
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={updateNewDescTodoForm}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleUpdateDescriptionTodo}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>


    );
}

export default Todo;