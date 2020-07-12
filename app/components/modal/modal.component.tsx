import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#modal');

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

const Modal: React.FC = (children, props) => {
  const { closeModal, isOpen } = props;

  return (
    <ReactModal
      // ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.shape({}),
  onRequestClose: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

Modal.defaultProps = {
  children: undefined,
  title: ''
};

export default Modal;
