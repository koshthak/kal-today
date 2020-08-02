import React, { useState } from 'react';

import Modal from '../modal/modal.component';
import addImg from '../../../internals/img/plus-white.svg';

const openBtn = {
  height: 30,
  cursor:'pointer',
}

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
          <div className="row m-0">
            <label className="p-0">Title</label>
            <div className="mainInputDiv">
              <input className="effect1" type="text" placeholder="Enter title" />
              <span className="focusbg"></span>
            </div>

            <label className="mt-3 p-0">Description</label>
            <div className="mainInputDiv">
              <textarea rows="5" className="effect1" type="text" placeholder="Enter description" />
              <span className="focusbg"></span>
            </div>

          </div>
        </Modal>
        <img src={addImg} style={openBtn} onClick={openModal} alt="open-btn"/>
      </div>
    </>
  );
};

export default Event;
