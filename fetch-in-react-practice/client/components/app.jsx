import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => {
        this.setState({ todos: data });
      })
      .catch(error => console.error(error));
  }

  // John needs to be nicer
  // newTodo = { task: "John needs to be nicer", isCompleted: false }
  // newTodo = { task: "zed", isCompleted: false }
  addTodo(newTodo) {
    fetch('api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(data => {
        const allTodos = this.state.todos.concat(data);
        this.setState({ todos: allTodos });
        // this.state.todos = [ {task: 1, description: meh}, {task: 2, description: meh}, {task: 3, description: meh}]
        // data = { task: "John needs to be nicer", isCompleted: false }
      })
      .catch(error => {
        console.error(error);
      });
  }

  toggleCompleted(todoId) {
    // use Array.prototype.find since ids and indexes normally do not line up
    const foundTask = this.state.todos.find(todoList => todoList.todoId === todoId);

    // this.state.todos = [ {todoId: 1, task: 1, description: meh, isCompleted: false}, {todoId: 2, task: 2, description: meh}, {todoId: 3, task: 3, description: meh}]

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(foundTask)
    })
      .then(res => res.json())
      .then(data => {
        const tasks = this.state.todos.map(task => task);
        // copy array using map to prevent changing state directly

        // find the task object using todoId and toggle isCompleted true/false
        tasks.find(todoList => todoList.todoId === todoId).isCompleted = !foundTask.isCompleted;
        this.setState({ todos: tasks });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
