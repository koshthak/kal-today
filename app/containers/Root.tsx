import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import { Store } from '../reducers/types';
import Routes from '../Routes';

type Props = {
  store: Store;
};

const Root = ({ store }: Props) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default hot(Root);
