import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import ROUTES from '../../constants/routes.json';

type Props = RouteComponentProps;

const MonthlyView: React.FC<Props> = ({ history }: Props) => {
  const { t } = useTranslation();

  const handleClick = (lang: string) => {
    i18next.changeLanguage(lang);
  };

  return (
    <div>
      <h2>Monthly View</h2>
      <button type="button" onClick={() => handleClick('en')}>
        English
      </button>
      <button type="button" onClick={() => handleClick('sa')}>
        Arabic
      </button>
      <button type="button" onClick={() => history.push(ROUTES.WEEKLY)}>
        go to weekly
        <h3>{t('close')}</h3>
      </button>
    </div>
  );
};

export default MonthlyView;
