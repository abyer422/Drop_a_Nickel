import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../styles/Footer.css';

function Footer() {
	return (
		<div className="footer">
			<div>
				Follow me on Facebook: <a href="https://www.facebook.com/IBeMoney/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
			</div>
			<div>	
				<p> &copy; 2021 drpnkl.com </p>
			</div>	
		</div>
	)
}

export default Footer