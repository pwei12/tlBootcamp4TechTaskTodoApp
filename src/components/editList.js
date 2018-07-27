import React, { Component } from 'react';

export default class EditList extends Component {
    render() {
        return (
            <form>
                <input value={this.props.display}
                       onChange={() => this.props.handleChange("this.props.item")}
                                    
                /> 
                <button onClick={this.props.handleSave}
                        className="btn-add">
                            Save
                </button>
            </form>
        )
    }
}