import React from 'react'
// import BannerImage from '../assets/bowlingHome2.jpg';
import BannerImage from '../assets/bowlingHome.jpg';
import '../styles/Home.css';

function Home() {
	return (
		<div className="home">
			<div className="headerContainer">
				<h1> Welcome to Drop a Nickel Pro Shop </h1>
				<p> For all of your professional bowling needs! </p>
			</div>
			
			<div className="image" style={{ backgroundImage: `url(${BannerImage})` }}>
				<>
				</>
			</div>	

		</div>
	)
}

export default Home