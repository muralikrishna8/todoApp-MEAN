var express = require("express");
var router = express.Router();
var Todo = require("../models/Todo");
var ObjectId = require('mongodb').ObjectID;

router.get("/", function(req, res){
    Todo.find(function (err, todos) {
        if(err)
            res.send(err);
        res.status(200);
        res.json(todos);
    });
});

router.put("/", function(req, res){
    Todo.create({
        text: req.body.text,
        done: false
    }, function(err, todo){
        if(err)
            res.send(err);
        res.json(todo);
    })
});

router.delete("/:id", function(req, res){
	Todo.remove({
		_id: ObjectId(req.params.id)
	}, function(err, result) {
		if (err) {
			res.json(err);
		}
		res.json({"message": "Deleted successfully"});
	});
});

router.post("/", function(req, res){
	var todo = req.body;
	Todo.update({_id: todo._id}, {$set: {done: todo.done}},
		function(err, result){
			if(err) {
				res.send(err);
			}
			res.json({"message": "Todo Status Updated successfully"});
		});
});

module.exports = router;