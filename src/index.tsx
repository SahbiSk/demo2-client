import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from 'store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from 'core/services/history.service';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <HistoryRouter history={history}>
        <Provider store={store}>
          <App />
        </Provider>
      </HistoryRouter>
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
