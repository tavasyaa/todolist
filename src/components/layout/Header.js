import React from 'react';
import { Link } from 'react-router-dom';


// a functional component just works the way render() does
function Header(){
	return (
		<header style={headerStyle}>
		<h1> To-do List </h1>
		<Link style= {LinkStyle} to= "/"> Home </Link> | <Link style= {LinkStyle} to= "/about"> About </Link> 
		</header>
	)
}

const headerStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
}
const LinkStyle = {
	color: '#fff',
	textDecoration: 'none'
}

export default Header;