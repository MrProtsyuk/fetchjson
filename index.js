"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
// json url
var url = "https://jsonplaceholder.typicode.com/todos/1";
// GET response
axios_1.default.get(url).then(function (response) {
    var todo = response.data;
    // pulling json data
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    //calling the log with the json data
    logTodo(id, title, completed);
});
// logging out the json data in a structure
var logTodo = function (id, title, completed) {
    console.log("\n    The Todo with ID: ".concat(id, "\n    Has a title of: ").concat(title, "\n    Is it finished? ").concat(completed, "\n  "));
};
