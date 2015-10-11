var app = angular.module("TodoApp", []);

app.controller("todoController", function() {
    this.list = [{
        "text" : "example todo 1",
        "done" : false
    }]
});