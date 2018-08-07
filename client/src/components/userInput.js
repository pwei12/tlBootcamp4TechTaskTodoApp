import React, { Component } from 'react';

export default class UserInput extends Component {
  render() {
    return (
      <form> 
        <input onChange={this.props.inputChange}
               value={this.props.userInput}
               type="text"
               name="newTodoDescription"
               placeholder="Enter your todos here"
               className="user-input"
         />
        <button onClick={this.props.handleAddTodos}
                className="btn-add">
          Add
        </button>
      </form>
    );
  }
}
