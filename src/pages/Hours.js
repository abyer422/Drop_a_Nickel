import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {Link} from 'react-router-dom';
import '../styles/Hours.css';

function Hours() {
	return (
		<div className="hours-page">

			<div className="hours">
				<h1> Hours of operation </h1>
				<ul>
					<li>
						Currently I do not have any set hours of operation
					</li>
					<li>
						Contact me to schedule an appointment! 
							<ArrowRightAltIcon />
							<Link to="/contact" className="link">
								<button> Contact Me </button>
							</Link>
					</li>
				</ul>
			</div>

			<div className="pricing">
				<h1> Pricing info </h1>
			</div>
			
			<div className="table-container">	
				<table>
					<thead>
						<tr>
							<th>Ball Drilling:</th>
						</tr>	
					</thead>

					<tbody>
						<tr>
							<td>Drill (Plastic)</td>
							<td>$30.00</td>
						</tr>
						<tr>
							<td>Drill (Reactive)</td>
							<td>$40.00</td>
						</tr>
					</tbody>	

					<thead>
						<tr>
							<th className="header">Drilling Extras:</th>
						</tr>
					</thead>
					
					<tbody>	
						<tr>
							<td>Finger Grips - Pair</td>
							<td>$8.00</td>
						</tr>
						<tr>	
							<td>Replace Grip - Each</td>
							<td>$4.00</td>
						</tr>	
						<tr>
							<td>Thumb Slug</td>
							<td>$10.00</td>
						</tr>	
						<tr>
							<td>Switch Grip Inner</td>
							<td>$20.00</td>
						</tr>
						<tr>
							<td>Switch Grip Outer</td>
							<td>$18.00</td>
						</tr>
						<tr>
							<td>I.T. Inner (Thumb)</td>
							<td>$18.00</td>
						</tr>	
						<tr>
							<td>I.T. Base and Sleeve</td>
							<td>$15.00</td>
						</tr>
					</tbody>	
					
					<thead>
						<tr>
							<th className="header">Services:</th>
						</tr>
					</thead>
						
					<tbody>
						<tr>
							<td>Resurface (By Hand)</td>
							<td>$30.00</td>
						</tr>
						<tr>
							<td>Revive</td>
							<td>$10.00</td>
						</tr>
						<tr>
							<td>Clean/Polish/Sand</td>
							<td>$5.00</td>
						</tr>
						<tr>
							<td>Full Plug</td>
							<td>$40.00</td>
						</tr>
						<tr>
							<td>Plug Finger or Thumb Only</td>
							<td>$20.00</td>
						</tr>
						<tr>
							<td>Plug Hole or Fix Damage</td>
							<td>$10.00</td>
						</tr>
					</tbody>		
				</table>			
			</div>
		</div>	
	)
}

export default Hours