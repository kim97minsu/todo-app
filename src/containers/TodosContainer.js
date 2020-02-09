import React, { Component } from 'react';
import TodoModel from '../models/TodoModel';

class TodosContainer extends Component {
  render() {
    TodoModel.all().then((res) => {
      console.log(res);
    });
    return ( 
      <div className='todosContainer'>
        <h2>I am the TodosContainer page</h2>
      </div>
    )
  }
}

export default TodosContainer;