import React from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component {
  // We're putting the state in the main component so every to-do can access it
  // You can pass todos into components as props, we pass them into Todos component
  state = {
  	todos: [
  	{
  		id: 1,
  		title: 'Take out the trash',
  		completed: false
  	},
  	{
  		id: 2,
  		title: 'Dinner with wife',
  		completed: false
  	},
  	{
  		id: 3,
  		title: 'Meeting with boss',
  		completed: false
  	}
  	]
  }

// todos is a prop, which you can access from within Todos
  render() {
    return (
      <div className="App">
        < Todos todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
