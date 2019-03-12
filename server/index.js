let express = require('express');
let bodyParser = require('body-parser');
let _ = require('lodash');
let db = require('../db/index.js');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(bodyParser.json());

// GET all todos
app.get('/todos', (req, res) => {
    console.log('GET Todos');
    const query = req.query;
    let where = {};

    db.sequalize.sync().then(() => {
        db.todo.findAll({
            where: where
        }).then((todo) => {
            console.log(todo.dataValues);
            return res.json(todo);
        });
    }).catch((e) => {
        console.log(e);
        return res.status(500).send();
    });
});

app.get('/todos/:id', (req, res) => {
    console.log(`GET Todo ID: ${req.params.id}`);
    const todoId = parseInt(req.params.id, 10);
    let where = {
        id: todoId
    };

    db.todo.findOne({
        where: where
    }).then((todo) => {
        if (todo) {
            console.log(todo.toJSON());
            res.json(todo.toJSON());
        } else {
            console.log('todo not found');
            return res.status(404).send();
        }
    }).catch((e) => {
        return res.status(500).json(e);
    });
});

// POST /todos
app.post('/todos', (req, res) => {
    const body = _.pick(req.body, 'description', 'completed');

    // validation
    if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
        console.log('Error: Missing either "completed" or "description" field!');
        return res.status(400).send();
    }

    // construct database
    db.todo.create(body).then((todos) => {
        if (todos) {
            console.log(todos.toJSON());
            req.user.addTodo(todos).then(() => {
                // the todos result is different from database
                // thus, reload is needed
                return todos.reload();
            }).then((todo) => {
                res.json(todo.toJSON());
            });
        } else {
            console.log('no todo found');
        }
    }).catch((e) => {
        res.status(400).json(e);
    });
});

app.delete('/todos/:id', (req, res) => {
    console.log(`DELETE Todo ID: ${req.params.id}`);
    const todoId = parseInt(req.params.id, 10);
    let where = {
        id: todoId
    };

    db.todo.destroy({
        where: where
    }).then((todo) => {
        if (todo) {
            console.log(`DELETED: Todo ID: ${req.params.id}`);
            res.json({status: 'success'});
        } else {
            return res.status(404).send();
        }
    }).catch((e) => {
        return res.status(500).json(e);
    });
});

db.sequalize.sync({
    force: false    // set 'true' to create a new database when server runs
}).then(function() {
    app.listen(PORT, function() {
        console.log('expresss listiening on port: ' + PORT);
    });
});