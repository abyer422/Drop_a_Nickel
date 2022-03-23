import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../assets/bowlingLogo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {

	const [ menu, setMenu ] = useState(false);

	const showMenu = () => {
		setMenu(!menu);
		localStorage.clear();
	}

	return (
		<div className="navbar">
			<div className="leftSide">
				<Link className="link" to="/">
					<HomeIcon />
				</Link>
			</div>
			<div className="center">
				<Link to="/">
					<img src={Logo} alt="Logo" />
				</Link>	
			</div>
			<div className="rightSide">
				<MenuIcon onClick={showMenu} />
			</div>
			<nav className={menu ? 'nav-menu active' : 'nav-menu'}>
				<ul>
					<li>
						<Link to="/inventory" onClick={showMenu}> Shop </Link>
					</li>
					<li>
						<Link to="/hours" onClick={showMenu}> Hours & Pricing </Link>
					</li>
					<li>	
						<Link to="/lessons" onClick={showMenu}> Lessons </Link>
					</li>
					<li>	
						<Link to="/about" onClick={showMenu}> About Me </Link>
					</li>
					<li>
						<Link to="/contact" onClick={showMenu}> Contact Me </Link>
					</li>
				</ul>
			</nav>			
		</div>
	)	
}

export default Navbar;