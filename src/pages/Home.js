import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../assets/bowlingHome2.jpg';
import '../styles/Home.css';

function Home() {
	return (
		<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
			<div className="headerContainer">
				<h1> Welcome to Drop a Nickel Pro Shop </h1>
				<p> For all of your professional bowling needs! </p>
				<div className="Links">
					<Link to="/about">
						<button> About Me</button>
					</Link>
					<Link to="/inventory">
						<button> Inventory </button>
					</Link>	
				</div>
			</div>	
		</div>
	)
}

export default Home