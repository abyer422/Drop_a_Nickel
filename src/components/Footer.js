import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
	return (
		<div className="footer">
			<div className="contactMe">
				<Link to="/contact">
					<button> Contact Me </button>
				</Link>	
			</div>
			<p> &copy; 2021 drpnkl.com </p>
		</div>
	)
}

export default Footer