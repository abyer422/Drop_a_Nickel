import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Logo from '../assets/bowlingLogo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
	return (
		<div className="navbar">
			<div className="home">
				<Link className="link" to="/">
					Home
				</Link>
			</div>
			<div className="center">
				<Link to="/uploadform">
					<img src={Logo} alt="Logo" />
				</Link>	
			</div>
			<div className="rightSide">
				<a href="https://www.instagram.com/teamnickel_drpankl/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
				<a href="https://twitter.com/DropANickel" target="_blank" rel="noreferrer"><TwitterIcon /></a>
				<a href="https://www.facebook.com/IBeMoney/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
			</div>	
		</div>
	)	
}

export default Navbar