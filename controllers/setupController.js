var Todos = require('../models/todoModel');

module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        // seed database 
        var starterTodos = [
            {
                username: 'neal',
                todo: 'interviews',
                isDone: false,
                hasAttachement: false
            },
            {
                username: 'jackie',
                todo: 'interview',
                isDone: false,
                hasAttachement: false
            },
            {
                username: 'Jennifer',
                todo: 'Learn Angular2',
                isDone: false,
                hasAttachement: false
            }
        ];
        Todos.create(starterTodos, function (err, results) {
            res.send(results);
        });
    });
}