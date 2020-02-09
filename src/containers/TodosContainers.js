import React, { Component } from 'react';
import TodoModel from '../models/TodoModel';
import Todos from '../components/Todos';

class TodosContainer extends Component {
  // constructor() is basically a function that invokes when an instance of our class gets initialized
  constructor() {
    // When we call super() we're basically saying invoke the same constructor function that the React library defines for their constructor
    super();
    this.state = {
      todos: [], 
    };
  };

  componentDidMount() {
    this.fetchData();
  };

  fetchData = () => {
    TodoModel.all.then((res)=> {
      this.setState ({
        todos: res.todos,
      });
    });
  };

  render() {
    return (
      <div className="todosComponent">
        <Todos 
          todos={this.state.todos} />
      </div>
    );
  };
};

export default TodosContainer;