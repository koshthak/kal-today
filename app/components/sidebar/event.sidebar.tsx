import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addDays } from 'date-fns';

import { createNewEvent } from '../../actions/event.action';
import DatePicker from '../datePicker/datePicker.component';

import Modal from '../modal/modal.component';

interface HandleInputChangeInterface {
  target: HTMLInputElement;
}

interface HandleTextAreaChangeInterface {
  target: HTMLTextAreaElement;
}

type Props = {
  closeModal: () => void;
  isOpen: boolean;
};

const Event = ({ isOpen, closeModal }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [range, setRange] = React.useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection',
  });

  const onSetTitle = (e: HandleInputChangeInterface) => {
    setTitle(e.target.value.trim());
    // console.log(e.target.value)
  };

  const onSetDescription = (e: HandleTextAreaChangeInterface) => {
    setDescription(e.target.value.trim());
    // console.log(e.target.value)
  };

  const submitEvent = () => {
    const event: Record<string, unknown> = {
      title,
      description,
      range,
    };

    dispatch(createNewEvent(event));
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <Modal title="Add New Event" isOpen={isOpen} closeModal={closeModal}>
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
          <button
            type="button"
            onClick={submitEvent}
            disabled={!title}
            className={
              title
                ? `btn-line-inverse btn-line-square btn-line-sm btn-line-ghost-inverse-primary`
                : `btn-line-inverse btn-line-square btn-line-sm btn-line-disabled`
            }
          >
            {t('create')}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Event;
