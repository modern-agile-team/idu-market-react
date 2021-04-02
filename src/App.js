import React from 'react';
import store, { history } from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import MainRouter from './pages/MainRouter';

import './scss/main.scss';

function App() {

  return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
              <MainRouter />
        </ConnectedRouter>
      </Provider>
  );
}

export default App;
