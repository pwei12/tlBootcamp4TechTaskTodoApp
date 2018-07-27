import React, { Component } from 'react';

export default class UserInput extends Component {
  render() {
    return (
      <form>
        <input
          onChange={this.props.inputChange}
          value={this.props.userInput}
          type="text"
          placeholder="Enter you todos here" />
        <button onClick={this.props.handleAddTodos}
          className="btn-add">
          Add
        </button>
      </form>
    );
  }
}
