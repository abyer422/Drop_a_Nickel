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
				<Link to="/about">
					<button> Find out more </button>
				</Link>
			</div>
		</div>
	)
}

export default Home