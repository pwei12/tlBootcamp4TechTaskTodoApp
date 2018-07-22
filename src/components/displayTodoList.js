import React, {Component} from 'react';

export default class DisplayTodoList extends Component {
    render() {
        return(
            <ul> 
                {this.props.todoList.map((item, i) => {
                    return(
                        <li key={item} onDoubleClick={}>
                            {item}
                            <button  onClick={this.props.handleDelete.bind(this, item)}>
                                Remove
                            </button>
                        </li>
                    ); 
                        
                })}
            </ul>
        );
    }
}