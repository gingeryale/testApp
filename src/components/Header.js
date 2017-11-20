import React from 'react';

const Header = (props) => (
    <div className="header">
    	<div className="container">
    	<div className="header-row">
		    	<div>
		    		<span className="header__title">Quick Tip: </span>
		    		<span className="header__subtitle">The Best Way</span>	
		    	</div>
		    	<div>
		    		<button onClick={props.handleOpenModal} className="header__button">Download</button>
		    	</div> 
	    	</div>     		
    	</div>
    </div>
  );

export default Header;
