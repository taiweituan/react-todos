var Sequalize = require('sequelize');
var sequalize = new Sequalize(undefined, undefined, undefined, {
    dialect: 'sqlite',
    storage: 'basic-sqlite-db.sqlite'
});

var Todo = sequalize.define('todo', {
    description: {
        type: Sequalize.STRING
    },
    test: {
        type: Sequalize.BOOLEAN
    }
});

sequalize.sync().then(function() {
    console.log("All synced");
});
