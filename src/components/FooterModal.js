import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    backgroundColor   : 'rgba(255, 255, 255, 0)'
  	},
 };


const FooterModal = (props) => (
    <div>
   		<Modal 
		isOpen={!!props.ModalState}
		onRequestClose={props.handleCloseModal}
		contentLabel="Open Modal"
		closeTimeoutMS={200}
		className="modal"
		style={customStyles}
		>
			<h3 className="modal__title">Footer Page</h3>
			<p className="modal__text">Lorem ipsum dolor sit amet, 
			consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
			invidunt ut labore et dolore magna aliquyam erat, 
			sed diam voluptua. At vero eos et accusam et justo duo 
			dolores et ea rebum at vero accusam book. 
			 </p>
			<button className="modal__button" onClick={props.handleCloseModal}>Dummy</button>
		</Modal>
    </div>
  );

export default FooterModal;
