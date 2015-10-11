var express = require("express");
var router = express.Router();
var Todo = require("../models/Todo");

router.get("/", function(req, res){
    Todo.find(function (err, todos) {
        if(err)
            res.send(err);
        res.json(todos);
    });
});

router.post("/", function(req, res){
    Todo.create({
        text: req.body.text,
        done: false
    }, function(err, todo){
        if(err)
            res.send(err);
        res.json(todo);
    })
});

module.exports = router;