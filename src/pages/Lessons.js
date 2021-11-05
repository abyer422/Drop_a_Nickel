import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Lessons.css';
import Construction from '../assets/underConstruction.gif';

function Lessons() {
	return (
		<div className="lessons-page">
			<div className="lessons">
				<h1> Lesson packages coming soon! </h1>
				<p> Contact me to schedule a lesson! </p>
					<Link to="/contact" className="link">
						<button> Contact Me </button>
					</Link>
			</div>
			<div className="construction">		
				<img src={Construction} alt="" />
			</div>				
		</div>
	)
}

export default Lessons;