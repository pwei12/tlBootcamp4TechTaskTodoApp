import React, { Component } from 'react';
import UserInput from './userInput';
import DisplayTodoList from './displayTodoList';
import '../css/todoApp.css';

export default class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todoList: [],
            newTodoDescription: ""
        }
    }

    //handleInputChange: record the change of input in the state when there's a key stroke in input
    handleInputChange = (e) => {
        const { name, value} = e.target;
        this.setState({
            [name]: value
        });
    }//handleInputChange

    //handleAddTodos: add new todo to the array in the state
    handleAddTodos = (e) => {
        e.preventDefault();
        
        if (this.state.newTodoDescription === "") {
            alert("Your to-do is empty. Please type your to-do");
        } else {
            const newTodo = {
                description: this.state.newTodoDescription,
                isDone: false,
            };

            const newTodoList = [
                ...this.state.todoList, //spread out the items in an array into a new array, without ... it will be an array inside a new array
                newTodo,
            ];
     
            this.setState({
                todoList: newTodoList,
                newTodoDescription: ""
            });
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
            <div className="todoApp-div">
                <h1>Todo App</h1>

                <UserInput inputChange={this.handleInputChange} 
                           userInput={this.state.newTodoDescription} 
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