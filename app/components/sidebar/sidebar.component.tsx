import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import SidebarHeader from './header.sidebar';
import SidebarDates from './dates.sidebar';
import Event from './event.sidebar';

import addImg from '../../../internals/img/plus-white.svg';
import styles from './sidebar.scss';

const openBtn = {
  height: 30,
  cursor: 'pointer',
};

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const handleClick = (lang: string) => {
    i18next.changeLanguage(lang);
  };

  const [isOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <SidebarDates />
      <div className={styles.event}>
        <div className={styles.eventTitle}>{t('newEvent')}</div>
        <div className={styles.modalDiv}>
          {/*  eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div onClick={openModal} onKeyDown={openModal}>
            <img src={addImg} style={openBtn} alt="open-btn" />
          </div>
          {isOpen && <Event isOpen={isOpen} closeModal={closeModal} />}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5px', left: '100px' }}>
        <p style={{ textAlign: 'center' }}>{t('changeLanguage')}</p>
        <button
          type="button"
          className="btn-line btn-line-square btn-line-sm btn-line-ghost-primary"
          onClick={() => handleClick('en')}
        >
          English
        </button>
        <button
          type="button"
          className="btn-line btn-line-square btn-line-sm btn-line-ghost-primary"
          onClick={() => handleClick('ar')}
        >
          Arabic
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
