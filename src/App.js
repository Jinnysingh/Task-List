import React, { Component } from 'react';
import axios from 'axios';
import Todos from './components/Todo/index';
import AddTodo from './components/AddTodo/index';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id)
          todo.completed = !todo.completed;
        return todo;
      })
    });
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  addTodo = (data) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: data,
      completed: false
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <div>ToDo List</div>
          </div>
          <div className="main-section">
            <AddTodo addTodo={this.addTodo} />
            <div className="list-items">
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </div>
           
          </div>

        </div>
      </div>
    );
  }
}

export default App;