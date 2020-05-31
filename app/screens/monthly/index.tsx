import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import routes from '../../constants/routes.json';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

type Props = RouteComponentProps;

function MonthlyView({ history }: Props) {
  const { t } = useTranslation();
  
  function handleClick(lang:string) {
    i18next.changeLanguage(lang)
  }

  return (
    <div>
      <h2>Monthly View</h2>
      <button onClick={()=>handleClick('US')} >
            English
      </button>
      <button onClick={()=>handleClick('SA')} >
            Korean
      </button>
      <button type="button" onClick={() => history.push(routes.WEEKLY)}>
        go to weekly 
        <h3>{t('Close.1')}</h3>
      </button>
    </div>
  );
};

export default MonthlyView;
