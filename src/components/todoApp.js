import React, { Component } from 'react';
import UserInput from './userInput';
import DisplayTodoList from './displayTodoList';

export default class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todoList: [],
            newTodo: {
                description: '',
                isDone: false,
                isEditing: false
            }//newTodo
        }//state
    }//constructor

    //handleInputChange: record the change of input in the state when there's a key stroke in input
    handleInputChange = (e) => {
        this.setState({
            newTodo: {
                description: e.target.value,
                isDone: false,
                isEditing: false
            }//newTodo
        });//setState
    }//handleInputChange

    //handleAddTodos: 
    handleAddTodos = (e) => {
        e.preventDefault();
        
        if (this.state.newTodo.description === "") {
            alert("Your to-do is empty. Please type your to-do");
        } else {
            var updatedTodoList = this.state.todoList.concat(this.state.newTodo);
            this.setState({
                todoList: updatedTodoList,
                newTodo: {
                    description: '',
                    isDone: false,
                    isEditing: false
                }//newTodo
            });//setState
        }//else
    }//handleAddTodos

    handleTodoClick = (currentTodo) => {
        currentTodo.isDone = !currentTodo.isDone;
        this.setState({ todoList: this.state.todoList });
    }

    //filter out the item to be deleted and update todoList in the state
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

                <UserInput inputChange={this.handleInputChange} 
                           userInput={this.state.newTodo.description} 
                           handleAddTodos={this.handleAddTodos} 
                           />
                                
                <DisplayTodoList todoList={this.state.todoList} 
                                 handleClick={this.handleTodoClick}
                                 handleDelete={this.handleDeleteTodo}
                                />
            </div>
        );//return
    }//render
}//component TodoApp