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

    todos.addTodo = function () {
        $http.post('/api/todos', todos.newTodo)
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
});