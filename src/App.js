import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// generates unique IDs!
//import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

class App extends React.Component {
  // We're putting the state in the main component so every to-do can access it
  // You can pass todos into components as props, we pass them into Todos component
  state = {
  	todos: [
  	]
  }


  // After the component mounts, this is called
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => this.setState({todos: res.data}))
  }

// we passed the id from todoitem by binding, so we can access it!
// toggle complete
  markComplete = (id) => {
  	this.setState({ todos: this.state.todos.map(todo => {
  		if (todo.id === id) {
  			todo.completed = !todo.completed
  		}
  		return todo;
  	}) });
  }


  // understand these two functions properly!
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', 
      {title, completed: false})
        .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
  }

// todos is a prop, which you can access from within Todos
  render() {
    return (
    <Router>
      <div className="App">
      	<div className="container">
        	<Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo = {this.addTodo}/>
              < Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
            </React.Fragment>
            )} />
            <Route path="/about" component={About} />

        </div>
      </div>
    </Router>
    );
  }
}

export default App;
