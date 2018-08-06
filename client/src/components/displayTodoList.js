import React, { Component } from 'react';
//import keyIndex from 'react-key-index';

export default class DisplayTodoList extends Component {

    render() {
        return (
            <ul className="displayList">
            {this.props.todoList.map((item, i) => {
                return (
                    <li key={item.id}>
                        
                        <input  
                               type = "text"
                               onChange = {this.props.inputChange}
                               value = {this.props.editingInput}
                               name = "editingDescription"
                               className ="display-input"
                               id = {item.isEditMode ? "" : "hidden"} // will be hidden when it is not in edit mode
                              //onKeyDown = {() => this.props.handleDone(item)}
                              />
                              
                        <span 
                              id = {item.isEditMode ? "hidden" : ""}  // will be hidden when it is in edit mode
                              className = {item.isDone ? "complete" : ""}
                              onClick = { () => this.props.handleClick(item) } 
                              //contentEditable = { item.isEditMode } 
                            >
                            {item.description}
                        </span>

                        <button onClick = {() => this.props.handleEdit(item)}
                                id = {item.isEditMode ? "hidden" : ""}
                                className="btn-list"
                                >
                            Edit
                        </button>

                        <button onClick = {() => this.props.handleDone(item)}
                                id = {item.isEditMode ? "" : "hidden"}
                                className="btn-list"
                                >
                            Enter
                        </button>

                        <button onClick = {() => this.props.handleDelete(item)}
                                className="btn-list"
                                > 
                            Remove
                        </button>
                     
                    </li>
                ); //return
            })}
        </ul>
        );
    }

    //Setup validation for each props
  /* DisplayTodoList.propTypes = {
    handleDoubleClick: React.PropTypes.func,
    

  }
  */
}