import React, { Component } from 'react';

export default class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodos: ''
    }

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.addTodoHandler = this.addTodoHandler.bind(this);
  }

  inputChangeHandler = e => {
    this.setState({
      newTodos: {description: e.target.value, isEditing: false }
    });
  }

  addTodoHandler = e => {
    let todosCopy = this.state.todos.slice();
    
    console.log("todocopy" + todosCopy);
    console.log(this.state.todos);
    todosCopy.push(this.state.newTodos);
    this.setState({todos: todosCopy});
    this.setState({newTodos: ''});
  }
  render(props) {

    return (
      <div>
        <input onChange={this.inputChangeHandler}
               value={this.state.newTodos}
               placeholder="Enter your todos here"
               type="text">

        </input>
        <button onClick={this.addTodoHandler}>
          Add
        </button>
      </div>
    );
  }
}
