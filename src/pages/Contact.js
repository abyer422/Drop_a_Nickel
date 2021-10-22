import React from 'react'
import Billy2 from '../assets/Billy2.jpg';
import '../styles/Contact.css';

function Contact() {
	return (
		<div className="contact">
			<div 
				className="leftSide"
				style={{ backgroundImage: `url(${Billy2})` }} >
			</div>
			<div className="rightSide">
				<h1> Contact Me </h1>
				<form id="contact-form" method="POST">
					<label htmlFor="name">Full Name</label>
					<input name="name" placeholder="Enter full name..." type="text" />
					<label htmlFor="email">Email</label>
					<input name="email" placeholder="Enter email..." type="email" />
					<label htmlFor="phone">Phone Number</label>
					<input name="phone" placeholder="123-456-7890" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
					<small>Format: 123-456-7890</small>
					<label htmlFor="message">Message</label>
					<textarea 
						rows="6" 
						placeholder="Enter message..." 
						name="message"
						required>
					</textarea>
					<button type="submit"> Send Message </button>
				</form>
			</div>
		</div>
	)
}

export default Contact