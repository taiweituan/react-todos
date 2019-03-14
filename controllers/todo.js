const db = require('../db/index');

exports.getTodos = (req, res) => {
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
};
