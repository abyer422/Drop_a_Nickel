import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Hours.css';

function Hours() {
	return (
		<div className="hours-page">
			<div className="hours">
				<h1> Hours: </h1>
				<p> Contact me to schedule an appointment! </p>
					<Link to="/contact" className="link">
						<button> Contact Me </button>
					</Link>
			</div>
			<div className="pricing">
				<h1> Pricing: </h1>
			</div>
		</div>	
	)
}

export default Hours