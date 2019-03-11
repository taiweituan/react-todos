const path = require('path');
const Sequelize =  require('sequelize');
const env = process.env.NODE_ENV || 'development';
const dbPath = path.resolve(__dirname, '../data/test.sqlite');
const db = {};
let sequelize;

if (env === 'production') {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        operatorsAliases: false
    });
} else {   
    sequelize = new Sequelize(undefined, undefined, undefined, {
        dialect: 'sqlite',
        storage: dbPath,
        operatorsAliases: false
    });
}

db.todo = sequelize.import(`${__dirname}/models/todo.js`);

// sequelize.sync();
db.sequalize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
