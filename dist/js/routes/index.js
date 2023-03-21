"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Server working</h1>');
});
router.get('/todos', todos_1.getTodosFromDB);
router.post('/add-todo', todos_1.addTodo);
router.put('/edit-todo/:id', todos_1.updateTodo);
router.delete('/delete-todo/:id', todos_1.deleteTodo);
exports.default = router;
