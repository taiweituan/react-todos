import Sequelize from 'sequelize';
import todoModel from './models/todo';

const env = process.env.NODE_ENV || 'development';
const db = {};
let sequalize;

if (env === 'production') {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
    });
} else {
    sequelize = new Sequelize(undefined, undefined, undefined, {
        'dialect': 'sqlite',
        'storage': __dirname + '/data/dev-todo-api.sqlite',
    });
}

db.todo = sequalize.import({todoModel});

db.sequalize = sequalize;
db.Sequelize = Sequelize;

export default db;
