import React from 'react';
import Todo from './Todo';

// Its responsibility will be to render all of the todos
// In this component, we have a property called todos
// When we eventually use this component, we need to pass it that property
// Once we have our todos, it takes each one and maps a Todo component to the variable todos
// Then renders all of the todos
// We can use the map function to render multiple components for each individual todo and store them in a variable
// We just need to make sure we bind this in case we need to access properties from the Todos component later
const Todos = (props) => {
  let todos = props.todos.map((todo) => {
    return (
      <Todo
        key={todo._id}
        todo={todo} />
    );
  });

  return (
    <ul>
      {todos}
    </ul>
  );
};

export default Todos;