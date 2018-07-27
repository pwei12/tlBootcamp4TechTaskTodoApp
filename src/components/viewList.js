import React, { Component } from 'react';

export default class ViewList extends Component {
    render() {
        return (
            <div>
                <span key={this.props.id}
                    className={this.props.cssClass}
                    onClick={() => this.props.handleClick(this.props.item)}>
                        {this.props.display}
                </span>

                <button onClick={() => this.props.handleEdit(this.props.item)}
                        className="btn-remove"> 
                    Edit
                </button>

                <button onClick={() => this.props.handleDelete(this.props.item)}
                        className="btn-remove"> 
                    Remove
                </button>
            </div>
        )
    }
}