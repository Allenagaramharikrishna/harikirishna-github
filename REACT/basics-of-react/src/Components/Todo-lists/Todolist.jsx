import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todoitem from "./Todoitem";

function Todolist() {
  const [todos, setTodos] = useState([]);

  const Add = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false, important: false };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.important = !todo.important;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };
  let sortedTodos = todos.sort((a, b) => b.important - a.important);
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm Add={Add} />
      <hr className="seperator" />
      {sortedTodos.map((todo) => {
        return (
          <Todoitem
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            importantTodo={importantTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}

export default Todolist;
