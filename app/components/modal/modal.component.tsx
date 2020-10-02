import React from 'react';
import ReactModal from 'react-modal';

import closeImg from '../../../internals/img/close.svg';

// ReactModal.setAppElement('#modal');

type Props = {
  title: string;
  children?: React.ReactNode;
  onRequestClose?: () => void;
  closeModal: () => void;
  isOpen: boolean;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    height: '70%',
    width: '70%',
    transform: 'translate(-50%, -50%)',
    // border: '2px solid black',
  },
};

const childMainDiv = {
  marginTop: 20,
};

const Modal: React.FC<Props> = ({ children, ...props }: Props) => {
  const { closeModal } = props;
  return (
    <ReactModal
      ariaHideApp={false}
      style={customStyles}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <div
        onClick={closeModal}
        onKeyPress={closeModal}
        role="button"
        tabIndex={0}
      >
        <img
          src={closeImg}
          style={{ float: 'right', height: 20 }}
          alt="close-btn"
        />
      </div>
      <div style={childMainDiv}>{children}</div>
    </ReactModal>
  );
};

export default Modal;
