import Sequelize from 'sequelize';
import todoModel from './models/todo';

const env = process.env.NODE_ENV || 'development';
const db = {};
let sequelize;

if (env !== 'production') {
    sequelize = new Sequelize(undefined, undefined, undefined, {
        dialect: 'sqlite',
        storage: `${__dirname}/data/dev-todo-api.sqlite`,
    });
}

sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
});

db.todo = sequelize.import(todoModel);

db.sequalize = sequelize;
db.Sequelize = Sequelize;

export default db;
