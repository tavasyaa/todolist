import React from 'react';

class AddTodo extends React.Component {
	// this is just component level state
	state = {
		title: ''
	}

	onSubmit = (e) => {
	// gets rid of the vanille javascript
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({title: ''});
	}

	// e for event handling, this updates the state to the value of what you type
	onChange = (e) => this.setState({[e.target.name]: e.target.value});
	
	render() {
		return(
			<form onSubmit= {this.onSubmit} style= {{ display: 'flex'}}>
				<input 
					type="text" 
					name="title" 
					style={{ flex: '10', padding: '5px'}}
					placeholder="Add Todo..."
					value= {this.state.title}
					onChange= {this.onChange}
				/>
				<input 
					type="submit" 
					value="Submit"
					className="btn"
					style = {{flex: '1'}}
				/>
			</form>

		)

	}
}

export default AddTodo;