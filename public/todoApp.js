var app = angular.module("TodoApp", []);

app.controller("todoController", function ($http) {
    var todos = this;
    todos.newTodo = {};

    $http.get('/api/todos')
        .success(function (data, status) {
            if (status === 200) {
                todos.list = data;
            }
        })
        .error(function (data, status) {
            console.log(data);
        });

    todos.addTodo = function() {
        $http.put('/api/todos', todos.newTodo)
            .success(function (data, status) {
                if (status === 200) {
                    todos.list.push({
                        "text": todos.newTodo.text,
                        "done": false
                    });
                }
            })
            .error(function (data, status) {
                console.log(data);
            });
    }

    todos.removeTodo = function(todoId) {
    	console.log(todoId);
    	$http.delete('/api/todos/'+todoId)
    		.success(function(data, status) {
    			if (status === 200) {
    				var removeIndex = todos.list.map(function(item){return item._id}).indexOf(todoId);
    				todos.list.splice(removeIndex, 1)
    			}
    		})
    }

    todos.changeStatus = function(todo) {
    	$http.post('/api/todos', todo)
    		.success(function (data, status) {
    			if (status !== 200) {
					todo.done != todo.done;
    			}
    		}).error(function (data, status) {
				todo.done = !todo.done;
    		});
    }

});