import React, { Component } from 'react';
import ViewList from './viewList';
import EditList from './editList';
//import keyIndex from 'react-key-index';

export default class DisplayTodoList extends Component {
    render() {
        return (
            <ul>
            {this.props.todoList.map((item, i) => {
                
                return (
                    <li>
                        {item.isEditing ? 
                            <EditList handleChange={this.props.handleChange}
                                      handleSave={this.props.handleSave} 
                                      display={this.props.newTodo.description}  
                                      item={item} 
                            /> 
                            : 
                            <ViewList id={i} 
                                      cssClass={item.isDone ? 'complete' : ''} 
                                      handleClick={this.props.handleClick} 
                                      item={item}
                                      display={item.description} 
                                      handleEdit={this.props.handleEdit}
                                      handleDelete={this.props.handleDelete}
                            /> 
                            }
                        {/* <span key={i}
                            className={item.isDone ? 'complete' : ''}
                            onClick={() => this.props.handleClick(item)}>
                          {item.description}
                        </span> */}

                        
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