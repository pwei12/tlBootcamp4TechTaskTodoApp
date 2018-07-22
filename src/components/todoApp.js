import React, { Component } from 'react';
import DisplayTodoList from './displayTodoList';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      newTodo: ''
    }
    
  }
  
  //using arrow function don't need to bind the event to "this". 
  //"this" scope is global and not limited to the calling function
  //best practice to use arrow function if using ES6 syntax
  handleInputChange = (event) => {
    this.setState({newTodo: event.target.value});
  }

  handleAddTodos = (event) => {
    event.preventDefault();
    var updatedTodoList = this.state.todoList.concat(this.state.newTodo);
    this.setState({
      todoList: updatedTodoList,
      newTodo: ''
    });
  }

  handleDeleteTodo = (todoToBeDeleted) => {
    var updatedTodoList = this.state.todoList.filter((todo) => {
      return (
        todo !== todoToBeDeleted
      );
    });
    this.setState({todoList: updatedTodoList});
  }
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <form> 
          <input onChange={this.handleInputChange} value={this.state.newTodo}>
          </input>
          <button onClick={this.handleAddTodos}>  
            Add
          </button>
          <DisplayTodoList todoList={this.state.todoList} handleDelete={this.handleDeleteTodo} />
        </form>
      </div>
    );
  }
}
