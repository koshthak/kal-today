import React from 'react';

import Modal from '../modal/modal.component';
import { useTranslation } from 'react-i18next';
import DatePicker from '../datePicker/datePicker.component';
import { addDays } from 'date-fns';

interface HandleInputChangeInterface {
  target: HTMLInputElement;
}

interface HandleTextAreaChangeInterface {
  target: HTMLTextAreaElement;
}

const Event = (props: { isOpen: boolean, closeModal: () => void }) => {
  const { t } = useTranslation();

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [range, setRange] = React.useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  });

  const onSetTitle = (e: HandleInputChangeInterface) => {
    setTitle(e.target.value.trim())
    // console.log(e.target.value)
  }

  const onSetDescription = (e: HandleTextAreaChangeInterface) =>{
    setDescription(e.target.value.trim())
    // console.log(e.target.value)
  }

  const submitEvent = () => {
    console.log(title,description,range);
  }

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
                value={title}
                onChange={onSetTitle}
                placeholder="Enter title"
              />
              <span className="focusbg" />
            </div>

            <label className="mt-3 p-0">{t('description')}</label>
            <div className="mainInputDiv">
              <textarea
                rows={5}
                className="effect1"
                value={description}
                onChange={onSetDescription}
                placeholder="Enter description"
              />
              <span className="focusbg" />
            </div>

            <label className="mt-3 p-0">{t('chooseDate')}</label>
            <div className="mainInputDiv">
              <DatePicker setRange={setRange} />
              <span className="focusbg" />
            </div>

            <div className="pt-3">
              <button type="button" 
                onClick={submitEvent}
                className="btn-line-inverse btn-line-square btn-line-sm btn-line-ghost-inverse-primary">
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
