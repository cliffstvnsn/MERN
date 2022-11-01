import React, { useState } from "react";
import './App.css';
import Todo from "./components/Todo";

function App() {
  /*
  Below array destructure syntax is equivalnet to:
  const newTodoStateArr = useState("");
  const newTodo = newTodoStateArr[0];
  const set NewTodo = newTodoStateArr[1];
  */
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false,
    };
    // setTodos and pass in a brand new array containing all new arrays 
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });
    setTodos(filteredTodos);
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;

        //To avoid mutating the todo directly, do this:
        // const updatedTodo = { ...todo, complete: !todo.copmlete};
        // return updatedTodo; 
      }

      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}
      >
        <input
          onChange={(event => {
            setNewTodo(event.target.value);
          })}
          type="text"
          value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      <hr />
      {todos.map((todo, i) => {


        return (
          <Todo key={i}
            todo={todo}
            handleToggleComplete={handleToggleComplete}
            handleTodoDelete={handleTodoDelete}
            i={i}
          />
        );
      })}
    </div>
  );
}

export default App;
