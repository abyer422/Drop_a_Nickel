import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {Link} from 'react-router-dom';
import '../styles/Lessons.css';
import Construction from '../assets/underConstruction.gif';

function Lessons() {
	return (
		<div className="lessons-page">
			<div className="lessons">
				<h1>Lessons</h1>
				
				<ul>
					<li> 
						Lesson packages coming soon! 
					</li>
					<li> 
						Contact me to schedule a lesson!
							<ArrowRightAltIcon />
							<Link to="/contact" className="link">
								<button> Contact Me </button>
							</Link>
					</li>
				</ul>
			</div>

			<div className="construction">		
				<img src={Construction} alt="" />
			</div>				
		</div>
	)
}

export default Lessons;