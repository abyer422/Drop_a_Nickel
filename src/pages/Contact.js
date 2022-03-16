import React, { useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useForm } from 'react-hook-form';
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
				window.location.reload();
			}, function(error) {
				alert("Failed to send message! Please try again later")
			});

		document.getElementById("contact-form").reset();
		localStorage.clear();
	}

	const message = watch('message') || "";
	const messageCharsLeft = 1500 - message.length;

	const details = localStorage.getItem("details");

	return (
		<div className="contact">
			<h1>Contact Me!</h1>
			<div className="body">
				<p>Thank you for visiting!!</p>
				<p>Fill out this form to shoot me an email or contact me at (505) 270 - 5950</p>
				<p>Follow me on Facebook <ArrowRightAltIcon /><a href="https://www.facebook.com/IBeMoney/" target="_blank" rel="noreferrer"><FacebookIcon /></a></p>
					<div className="contact-form">						
						<form id="contact-form" onSubmit={handleSubmit(onSubmit)} >

							<input type="hidden" name="contact_number" value={contactNumber} />
							
							<label htmlFor="name">Full Name</label>
							<input 
								name="name" 
								placeholder="Enter your full name..." 
								type="text" 
								maxLength='30' 
								required />
							
							<label htmlFor="email">Email</label>
							<input 
								name="email" 
								placeholder="Enter your email..." 
								type="email" 
								maxLength='50' 
								required />
							
							<label htmlFor="phone">Phone Number</label>
							<input 
								name="phone" 
								placeholder="123-456-7890" 
								type="tel" 
								// pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
								maxLength='30' 
								required />
							<small>Format: 123-456-7890</small>
							
							<label htmlFor="message">Message</label>
							<textarea 
								id="message"
								rows="6" 
								placeholder="Enter your message..." 
								value={!details ? "" : details}
								name="message"
								maxLength='1500' 
								required 
								{...register("message")} >
							</textarea>
							<small>{messageCharsLeft} characters left </small>
							
							<button type="submit"> Send Message </button>
						</form>
					</div>
			</div>	
		</div>
	)
}

export default Contact