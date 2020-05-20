import React, { Component } from 'react';
import logo from "../../logo.svg"
import "./index.css"

export class TodoItem extends Component {

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div className="todo-items" style={{ textDecoration: completed ? 'line-through' : "none" }}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={completed ? 'checked' : ''} />{' '}
                    {title}
                        <img src={logo} onClick={this.props.delTodo.bind(this, id)}></img>
                </p>
            </div>
        )
    }
}

export default TodoItem;