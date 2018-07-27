import React, { Component } from 'react';
//import keyIndex from 'react-key-index';

export default class DisplayTodoList extends Component {
    render() {
        return (
            <ul>
            {this.props.todoList.map((item) => {
                return (
                    <li>
                        <span key={item.id}
                            className={item.isDone ? 'complete' : ''}
                            onClick={() => this.props.handleClick(item)}>
                          {item.description}
                        </span>
                        
                        <button onClick={() => this.props.handleDelete(item)}
                                className="btn-remove"> 
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