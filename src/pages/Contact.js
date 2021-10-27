import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Billy2 from '../assets/Billy2.jpg';
import '../styles/Contact.css';
import { init, sendForm } from 'emailjs-com';
init('user_1trT0OPzsLaeCi658ABiD');
		

function Contact() {

	const [contactNumber, setContactNumber] = useState("000000");

		const generateContactNumber = () => {
			const numStr = "000000" + (Math.random() * 1000000 | 0);
			setContactNumber(numStr.substring(numStr.length - 6));
		}

	const { handleSubmit, watch, register } = useForm();
	const onSubmit = (data) => {
		generateContactNumber();

		sendForm('default_service', 'template_15t4u5d', '#contact-form')
			.then(function(response) {
				alert("Thank you for your email!");
			}, function(error) {
				alert("Failed to send message! Please try again later")
			});

		document.getElementById("contact-form").reset();
	}


	const message = watch('message') || "";
	const messageCharsLeft = 1500 - message.length;

	return (
		<div className="contact">
			<div 
				className="leftSide"
				style={{ backgroundImage: `url(${Billy2})` }} >
			</div>
			<div className="rightSide">
				<h1> Contact Me </h1>
				<form id="contact-form" onSubmit={handleSubmit(onSubmit)} >

					<input type="hidden" name="contact_number" value={contactNumber} />
					
					<label htmlFor="name">Full Name</label>
					<input 
						name="name" 
						placeholder="Enter full name..." 
						type="text" 
						maxLength='30' 
						required />
					
					<label htmlFor="email">Email</label>
					<input 
						name="email" 
						placeholder="Enter email..." 
						type="email" 
						maxLength='50' 
						required />
					
					<label htmlFor="phone">Phone Number</label>
					<input 
						name="phone" 
						placeholder="123-456-7890" 
						type="tel" 
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
						maxLength='30' 
						required />
					<small>Format: 123-456-7890</small>
					
					<label htmlFor="message">Message</label>
					<textarea 
						rows="6" 
						placeholder="Enter message..." 
						name="message"
						maxLength='1500' 
						required 
						{...register("message")} >
					</textarea>
					<p>{messageCharsLeft} characters left </p>
					
					<button type="submit"> Send Message </button>
				</form>
			</div>
		</div>
	)
}

export default Contact