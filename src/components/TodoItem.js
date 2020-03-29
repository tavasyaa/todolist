import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
	// This function is used to style each to-do item, strikes through if it's completed
	// You can also style using a css file like you always do
	getStyle = () => {
		return {
			backgroundColor: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed? 'line-through': 'none'
		}
	}

	// For functions that are called in an event, a parameter is passed
	// You'd need to bind if you used a regular function, but not arrow

	render() {
	// destructuring
		const { id, title } = this.props.todo
		return (
	// You can inline style JSX, similar to CSS, use double curly braces
	// You can also define a const and refer to it
	// You can also use functions, which is what we do here
			<div style = { this.getStyle() }>
				<p>
					<input type="checkbox" onChange = {this.props.markComplete.bind(this, id)}/> {' '}
					{ title } 
					<button onClick = {this.props.delTodo.bind(this, id)} style = {btnStyle}> x </button>
				</p>
			</div>
		)
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}

const btnStyle = {
	backgroundColor: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}


export default TodoItem;