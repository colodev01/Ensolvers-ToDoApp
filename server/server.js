require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('knex');

//TODO
const getTodos = require('./controllers/todo/gettodos');
const addTodo = require('./controllers/todo/addtodo');
const updateTodo = require('./controllers/todo/updatetodo');
const removeTodo = require('./controllers/todo/removetodo');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

const db = knex({
	client: process.env.BDCLIENT,
	connection: {
	  host : process.env.BDHOST,
	  user : process.env.BDUSER,
	  password : process.env.BDPASS,
	  database : process.env.BDNAME
	}
});

//****TODOS****//
app.get('/todo',(req,res) => {getTodos.handleGetTodos(req,res,db)});

app.post('/todo',(req,res) => {addTodo.handleAddTodo(req,res,db)});

app.put('/todo',(req,res) => {updateTodo.handleUpdateTodo(req,res,db)});

app.delete('/todo',(req,res) => {removeTodo.handleRemoveTodo(req,res,db)});

app.listen(process.env.SERVERPORT);
