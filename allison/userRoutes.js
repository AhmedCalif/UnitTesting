const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: 'John Doe', email: 'john@example.com' }]; // Sample data

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).send({ message: 'Name and email are required' });
    }
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).send(newUser);
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
});

module.exports = app;
