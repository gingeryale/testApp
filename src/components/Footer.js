import React from 'react';
import Fb from './ico-fb.svg';
import Tw from './ico-tw.svg';
import In from './ico-in.svg';
import Gh from './ico-gh.svg';


const Footer = (props) => (
    <div className="footer">
   		<div className="container">
   			<div className="footer__row">
	   			<div className="footer__id">
	   				<span className="footer__title">This is your</span>
	   				<span className="footer__copyright">&#169; 2017</span>
	   			</div>
	   			<div className="footer__socials">

	   				<span className="social__btn"><Fb width={30} height={30}/></span>
	   				<span className="social__btn"><Tw width={30} height={30}/></span>
	   			   	<span className="social__btn"><In width={30} height={30}/></span>
	   				<span className="social__btn"><Gh width={30} height={30}/></span>
	   			</div>
   			</div>
   		</div>
    </div>
  );

export default Footer;
