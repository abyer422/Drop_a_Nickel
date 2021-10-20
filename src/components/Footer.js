import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../styles/Footer.css';

function Footer() {
	return (
		<div className="footer">
			<div className="socialMedia">
				<a href="https://www.instagram.com/teamnickel_drpankl/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
				<a href="https://twitter.com/DropANickel" target="_blank" rel="noreferrer"><TwitterIcon /></a>
				<a href="https://www.facebook.com/IBeMoney/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
			</div>
			<p> &copy; 2021 drpnkl.com </p>
		</div>
	)
}

export default Footer