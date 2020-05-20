import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <>
                <h4 className="heading">ToDo List</h4>
                <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                    <input
                        type="text"
                        name="title"
                        style={{ flex: '10', padding: '15px', margin: '10px' }}
                        placeholder="Add Todo..."
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Add"
                        className="btn"
                        style={{ flex: '1', margin: '10px' }}
                    />
                </form>
            </>
        )
    }
}


export default AddTodo;
