import React from 'react';
import TodoItem from './TodoItem.js'


// for each todo, display an h3
class Todos extends React.Component {
  render() {
  return this.props.todos.map((todo) => (
	<TodoItem todo = {todo}/>
	  	))
  }
}

export default Todos;
