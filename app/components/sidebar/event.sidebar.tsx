import React, { useState } from 'react';

import Modal from '../modal/modal.component';

const Event: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div>
        <Modal title="Add New Event" isOpen={isOpen} closeModal={closeModal}>
          <div>hi</div>
        </Modal>
        <button type="button" onClick={openModal}>
          open Event
        </button>
      </div>
    </>
  );
};

export default Event;
