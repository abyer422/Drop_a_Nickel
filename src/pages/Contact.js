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
				className="top"
				style={{ backgroundImage: `url(${Billy2})` }} >
			</div>
			<div className="body">
				<div className="leftSide">
					<h3>Thank you for visiting!!</h3>
					<h6>Fill out this form to shoot me an email or contact me at (505) 555-5555.</h6>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.141741839591!2d-106.63820378418734!3d35.252729360958845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872270b61a7d7f5b%3A0x3d9cc5dc80a4cbf0!2s202%20Cabeza%20Negra%20Ct%20SE%2C%20Rio%20Rancho%2C%20NM%2087124!5e0!3m2!1sen!2sus!4v1637810184082!5m2!1sen!2sus"></iframe>
				</div>
				<div className="rightSide">
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
								pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
								maxLength='30' 
								required />
							<small>Format: 123-456-7890</small>
							
							<label htmlFor="message">Message</label>
							<textarea 
								id="test"
								rows="6" 
								placeholder="Enter your message..." 
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
			</div>	
		</div>
	)
}

export default Contact