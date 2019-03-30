const db = require('../db/index');
const _ = require('lodash');

module.exports = {
    // GET /todos
    getTodos: (req, res) => {
        console.log('GET Todos');
        // const query = req.query;
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
    },

    // GET /todos/:id
    getOneTodo: (req, res) => {
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
    },

    // POST /todos
    createTodo: (req, res) => {        
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
                res.json(todos.toJSON());
            } else {
                console.log('no todo found');
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json(e);
        });
    },

    // DELETE /todos/:id
    deleteTodo: (req, res) => {
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
    }
};