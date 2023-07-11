import axios from "axios";

// json url
const url = "https://jsonplaceholder.typicode.com/todos/1";

//includes reference types so that you dont get confused :)
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// GET response
axios.get(url).then((response) => {
  const todo = response.data as Todo;

  // pulling json data
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  //calling the log with the json data
  logTodo(id, title, completed);
});

// logging out the json data in a structure
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
