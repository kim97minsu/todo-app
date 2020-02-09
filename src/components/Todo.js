import React, { Component } from 'react';

// we know that if we pass it a todo, as a prop, that has both an id and a body, that it will render

class Todo extends Component {
  render() {
    return (
      <li data-todos-index={this.props.todo._id}>
        <span className="todo-item">{this.props.todo.body}</span>
      </li>
    )
  }
}

export default Todo