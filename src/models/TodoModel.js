const endPoint = `https://super-crud-api.herokuapp.com/api/todos`;

class TodoModel {
  static all = () => {
    return fetch(endPoint)
      // return a promise with response.json() that we can use to load todos from the DB in frontend components
      .then(response => response.json())
      .catch(err => console.log('Could not get all todos\n', err));
  };
};

export default TodoModel;