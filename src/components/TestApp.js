import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FooterModal from './FooterModal';

export default class TestApp extends React.Component {
  state = { ModalState: undefined };

  handleOpenModal = () => {
    this.setState(() => ({ ModalState: true }));
  }

  handleCloseModal = () => {
    this.setState(() => ({ ModalState: undefined }));
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer…';

    return (
      <div>
        <Header handleOpenModal={this.handleOpenModal} />
        <Footer />
        <FooterModal ModalState={this.state.ModalState} handleOpenModal={this.handleOpenModal} handleCloseModal={this.handleCloseModal} />
      </div>
    );
  }
}
