import React from 'react'
import '../../styles/components/app.scss'
import {Link} from 'react-router-dom'
const Nav = () => {
	const navStyle={
		color: 'white'
	}
	return(
		<nav>
			<h3>logo</h3>
			<ul className="nav-links">
				<Link style={navStyle} to="/about">About</Link>
				<Link style={navStyle} to="/shop">Shop</Link>
			</ul>
		</nav>
		)
}

export default Nav;