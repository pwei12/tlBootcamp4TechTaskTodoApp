import React, { Component } from 'react';
import UserInput from './userInput';
import DisplayTodoList from './displayTodoList';
import '../css/todoApp.css';

export default class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todoList: [],
            newTodoDescription: "",
            editingDescription:"",
        }
    }

    async componentDidMount() {
        const response = await fetch("/todos");//server returns json data
        const { todoList } = await response.json(); //todos is just the object without the {}, with {} it destructures the object and get the data inside i.e the array
        this.setState({
            todoList: todoList,
        });
    }

    //handleInputChange: record in the state the change of input whenever there's a key stroke in input
    handleInputChange = (e) => {
        const { name, value} = e.target; //get two variables i.e name and value at the same time
        this.setState({
            [name]: value
        });
    }

    //handleAddTodos: add new todo to the array in the state
    handleAddTodos = async (e) => {
        e.preventDefault();
        
        if (this.state.newTodoDescription === "") {
            alert("Your to-do is empty. Please type your to-do");
        } else {
            const newTodo = {
                description: this.state.newTodoDescription,
                isDone: false,
                id: Date.now(), //returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
                isEditMode: false,
            };

            const newTodoList = [
                ...this.state.todoList, //spread out the items in an array into a new array, without ... it will be an array inside a new array
                newTodo,
            ];
     
            this.setState({
                todoList: newTodoList,
                newTodoDescription: "",
            });
            
            await fetch("/todos", {
                method: 'post', 
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ todo: newTodo }),//convert the object to string byte to be sent to server
            });

        }
    }//handleAddTodos

    //toggle isDone
    handleTodoClick = async (currentTodo) => {
        currentTodo.isDone = !currentTodo.isDone;
        this.setState({ todoList: this.state.todoList });

        const index = this.state.todoList.indexOf(currentTodo);
        const updatedTodo = this.state.todoList[index];
        await fetch("/todos", {
            method: 'put', 
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ updatedTodo }),
        });
    }

    //filter out the item to be deleted 
    handleDeleteTodo = async (todoToBeDeleted) => {
        const updatedTodoList = this.state.todoList.filter((todo) => {
            return (
                todo !== todoToBeDeleted
            );
        });

        this.setState({todoList: updatedTodoList});

        await fetch("/todos", {
            method: 'delete', 
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ todo: todoToBeDeleted }),
        });
    }

    //toggle isEditMode, and get current todo description
    handleEditTodo = (todoToBeEdited) => {
        todoToBeEdited.isEditMode = !todoToBeEdited.isEditMode;
        
        this.setState({ 
            todoList: this.state.todoList,
            editingDescription: todoToBeEdited.description,
         });
    }

    handleDoneEdit = async (currentTodo) => {        
        const newTodoList = this.state.todoList;
        const index = this.state.todoList.indexOf(currentTodo);
        const updatedTodo = { //edited todo
            description: this.state.editingDescription,
            isDone: currentTodo.isDone,
            id: currentTodo.id,
            isEditMode: false,
        };

        newTodoList.splice(index, 1, updatedTodo); //replace old todo at index with edited todo
        
        this.setState({
            todoList: newTodoList,
            editingDescription: "",
        });

        await fetch("/todos", {
                method: 'put', 
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ updatedTodo }),
            });
    }//handleDoneEdit

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
                                 handleEdit={this.handleEditTodo}
                                 handleDone={this.handleDoneEdit}
                                 inputChange={this.handleInputChange}
                                 editingInput={this.state.editingDescription}
                />
            </div>
        );//return
    }//render

}//component TodoApp