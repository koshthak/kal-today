import React, { Fragment, Suspense } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import './i18n';
import './styles/index.global.scss';

// navigation after global scss import so that gloabl scss dosen't override local scss
import Navigation from './navigation';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;
const { persistor, store } = configureStore();

document.addEventListener('DOMContentLoaded', () =>
  render(
    <Suspense fallback={<div>Loading</div>}>
      <AppContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
      </AppContainer>
    </Suspense>,
    document.getElementById('root')
  )
);
