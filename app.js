const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const db = require('./db/index');

/**
 * Controllers
 */
const todoController = require('./controllers/todo');

/**
 * Express configuration.
 */
const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,POST,PATCH,DELETE');

    next();
});

// GET all todos
app.get('/todos', todoController.getTodos);

// GET one todo
app.get('/todos/:id', todoController.getOneTodo);

// POST /todos
app.post('/todos', todoController.createTodo);

// DELETE /todos/:id
app.delete('/todos/:id', todoController.deleteTodo);

// PATCH /todos/:id
app.patch('/todos/:id', todoController.editTodo);

db.sequalize.sync({
    force: false    // set 'true' to create a new database when server runs
}).then(function() {
    // app.use(express.static(path.resolve(__dirname, './public')));
    app.listen(PORT, function() {
        console.log('expresss listiening on port: ' + PORT);
    });
});
