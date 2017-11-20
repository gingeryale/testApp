import React from 'react';


const Footer = (props) => (
    <div className="footer">
   		<div className="container">
   			<div className="footer__row">
	   			<div className="footer__id">
	   				<span className="footer__title">This is your</span>
	   				<span className="footer__copyright">&#169; 2017</span>
	   			</div>
	   			<div className="footer__socials">
	   				<span className="social__btn"><img src="../images/social-fb.png" alt="facebook" /></span>
	   				<span className="social__btn"><img src="../images/social-twr.png" alt="twitter" /></span>
	  	   			<span className="social__btn"><img src="../images/social-in.png" alt="linkedin" /></span>
	   				<span className="social__btn"><img src="../images/social-gh.png" alt="github" /></span>
	   			</div>
   			</div>
   		</div>
    </div>
  );

export default Footer;
