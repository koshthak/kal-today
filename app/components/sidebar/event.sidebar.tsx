import React from 'react';

import Modal from '../modal/modal.component';
import { useTranslation } from 'react-i18next';
import DatePicker from '../datePicker/datePicker.component';

const Event = (props: { isOpen: boolean, closeModal: () => void }) => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <Modal title="Add New Event" isOpen={props.isOpen} closeModal={props.closeModal}>
          <div className="row m-0">
            <label className="p-0">{t('title')}</label>
            <div className="mainInputDiv">
              <input
                className="effect1"
                type="text"
                placeholder="Enter title"
              />
              <span className="focusbg" />
            </div>

            <label className="mt-3 p-0">{t('description')}</label>
            <div className="mainInputDiv">
              <textarea
                rows={5}
                className="effect1"
                placeholder="Enter description"
              />
              <span className="focusbg" />
            </div>

            <label className="mt-3 p-0">{t('chooseDate')}</label>
            <div className="mainInputDiv">
              <DatePicker/>
              <span className="focusbg" />
            </div>

            <div className="pt-3">
              <button type="button" className="btn-line-inverse btn-line-square btn-line-sm btn-line-ghost-inverse-primary">
                {t('create')}
              </button>
            </div>

          </div>
        </Modal>
      </div>
    </>
  );
};

export default Event;
