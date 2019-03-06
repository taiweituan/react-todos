const path = require('path');
const Sequelize =  require('sequelize');
const env = process.env.NODE_ENV || 'development';
const dbPath = path.resolve(__dirname, '/data/test.sqlite');
// const db = 
let sequelize;

if (env === 'production') {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
    });
} else {   
    sequelize = new Sequelize(undefined, undefined, undefined, {
        dialect: 'sqlite',
        storage: dbPath
    });
}

db.todo = sequelize.define('todo', {
    description:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            len: [1, 250]
        }
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

sequelize.sync();
// db.sequalize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
