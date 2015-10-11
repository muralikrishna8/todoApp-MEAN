var app = angular.module("TodoApp", []);

app.controller("todoController", function($http) {
    var todos = this;
    $http.get('/api/todos')
        .success(function(data, status){
            if(status === 200){
                todos.list = data;
            }
        })
        .error(function(data, status){
            console.log(data);
        });
});