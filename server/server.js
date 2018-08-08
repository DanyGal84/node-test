const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Daniel Galvan',
        age: 34,
        location: 'Mexico'
    }, {
        name: 'Andrew',
        age: 25,
        location: 'Philadelphia'
    }, {
        name: 'Jen',
        age: 26,
        location: 'New Mexico'
    }]);
});

app.listen(3000);

module.exports.app = app;