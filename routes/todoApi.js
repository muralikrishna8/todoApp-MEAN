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

module.exports = router;