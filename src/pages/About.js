import React from 'react'
import Billy from '../assets/Billy.jpg';
import '../styles/About.css';

function About() {
	return (
		<div className="wrapper">
			<div 
				className="leftSide"
				style={{ backgroundImage: `url(${Billy})` }} >
			</div>
			<div className="rightSide">
				<h1> ABOUT ME </h1>
				<p> In nulla labore cillum ut culpa irure eu velit sed exercitation aute esse fugiat dolore 
 					roident aliquip pariatur fugiat. Aute in ut minim amet duis ut nulla ut in officia 
 					dolore voluptate ullamco sunt in aute labore in ea sit. Lorem ipsum mollit magna laboris 
 					consectetur magna ut ex ut occaecat culpa in aliquip nulla deserunt sint nostrud laborum 
 					tempor qui consectetur fugiat dolore do amet laboris est fugiat mollit ut labore 
 					adipisicing deserunt velit non exercitation elit elit esse et velit commodo ex dolore 
 					amet quis qui et ad laborum.
 				</p>
			</div>
		</div>
	)
}

export default About