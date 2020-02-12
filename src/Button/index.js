import React from 'react'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <div>
        <button className='header-link header-bttn' onClick={this.openModal}>Contact Us</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <button onClick={this.closeModal}>X</button>
          <h2 ref={subtitle => this.subtitle = subtitle}>Contact Us</h2>
          <div>Give us a call @ (555)-555-5555 or fill out the form below and we'll get back to you shortly.</div>
          <form>
            <input />
            <input />
            <input />
            <input />
          <button>Submit</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Button