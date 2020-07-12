import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#modal');

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
    transform: 'translate(-50%, -50%)'
  }
};

const Modal: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <ReactModal
      // ariaHideApp={false}
      style={customStyles}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
