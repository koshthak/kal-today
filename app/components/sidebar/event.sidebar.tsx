import React, { useState } from 'react';

import Modal from '../modal/modal.component';
import addImg from '../../../internals/img/plus-white.svg';

const openBtn = {
  height: 30,
  cursor: 'pointer',
};

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
              <input
                className="effect1"
                type="text"
                placeholder="Enter title"
              />
              <span className="focusbg" />
            </div>

            <label className="mt-3 p-0">Description</label>
            <div className="mainInputDiv">
              <textarea
                rows={5}
                className="effect1"
                placeholder="Enter description"
              />
              <span className="focusbg" />
            </div>
          </div>
        </Modal>
        {/*  eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div onClick={openModal} onKeyDown={openModal}>
          <img src={addImg} style={openBtn} alt="open-btn" />
        </div>
      </div>
    </>
  );
};

export default Event;