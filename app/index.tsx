import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { configureStore } from './store/configureStore';
import Navigation from './navigation';

import './styles/index.scss';

const store = configureStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () =>
  render(
    <AppContainer>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
);
