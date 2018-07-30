import React, { Component } from 'react';

export default class UserInput extends Component {
  render() {
    return (
      <form className="input">
        <input onChange={this.props.inputChange}
               value={this.props.userInput}
               type="text"
               name="newTodoDescription"
               placeholder="Enter you todos here" />
        <button onClick={this.props.handleAddTodos}
                className="btn-add">
          Add
        </button>
      </form>
    );
  }
}
