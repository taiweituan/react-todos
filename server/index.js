import express from 'express';
import bodyParser from 'body-parser';
import _ from 'lodash';
import db from '../db';

const app = express();
const PORT = process.env.PORT || 8081;

app.use(bodyParser.json());

// GET all todos
app.get('/todo', (req, res) => {
    db.sequalize.sync().then((todo) => {
        res.json(todo);
    }).catch((e) => {
        console.log(e);
        return res.status(500).send();
    });
});

// POST /todos
app.post('/todos', (req, res) => {
    var body = _.pick(req.body, 'description', 'completed');

    // validation
    if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
        return res.status(400).send();
    }

    // construct database
    db.todo.create(body).then(function(todos) {
        if (todos) {
            // res.json(todos.toJSON());
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
    }).catch(function(e) {
        res.status(400).json(e);
    });
});

db.sequelize.sync({
    force: false
}).then(function() {
    app.listen(PORT, function() {
        console.log('expresss listiening on port: ' + PORT);
    });
});