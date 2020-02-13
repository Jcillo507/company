import React from 'react'
import Modal from 'react-modal';
import './button.scss'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '355px',
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
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <div className='modal'>
        <button className='header-link header-bttn' onClick={this.openModal}>Contact Us</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          // className='modal'
        >
          <div className='modal'>
          <button className='modal-close'onClick={this.closeModal}>X</button>
          <h2 ref={subtitle => this.subtitle = subtitle}>Contact Us</h2>
          <div className='modal-desc'>Give us a call @ (555)-555-5555 or fill out the form below and we'll get back to you shortly.</div>
            <div classname='form-inputs'>
          <form >
            <input className='modal-input'placeholder='Name'/>
            <input className='modal-input'type='e-mail' placeholder='Email'/>
            
            <input className='modal-input'placeholder='Phone Number'/>
                <br />
            <input className='modal-text'placeholder='How can we help you today?'/>
            <br />
          {/* <input type='Submit'/> */}
          <button disabled='true'>Submit</button>
          </form></div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Button