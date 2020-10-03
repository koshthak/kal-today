import React from 'react';
import ReactModal from 'react-modal';

import closeImg from '../../../internals/img/close.svg';
import styles from './modal.scss';

type Props = {
  children: React.ReactNode;
  closeModal: () => void;
};

const Modal: React.FC<Props & ReactModal.Props> = ({
  children,
  closeModal,
  className,
  ...props
}: Props & ReactModal.Props) => {
  return (
    <ReactModal
      ariaHideApp={false}
      className={className || styles.modal}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <button
        type="button"
        onClick={closeModal}
        className={styles['close-btn']}
      >
        <img src={closeImg} alt="close-btn" />
      </button>
      {children}
    </ReactModal>
  );
};

export default Modal;
