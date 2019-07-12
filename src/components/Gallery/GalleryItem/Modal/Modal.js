/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends Component {
  overlayRef = createRef();

  handleModalClose = e => {
    const { closeModal } = this.props;
    const { current } = this.overlayRef;
    if (e.target === current) {
      closeModal();
    }
  };

  closeModalifEscape = e => {
    const { closeModal } = this.props;
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  componentDidMount = () => {
    document.addEventListener('keydown', this.closeModalifEscape);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.closeModalifEscape);
  };

  render() {
    const { src } = this.props;

    return (
      <div
        className={styles.overlay}
        ref={this.overlayRef}
        onClick={this.handleModalClose}
      >
        <div className={styles.modal}>
          <img src={src} alt="" className={styles.image} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
export default Modal;
