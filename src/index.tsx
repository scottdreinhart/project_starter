import React from 'react';
import ReactDOM from 'react-dom/client';

import { IntlProvider } from 'react-intl';
import English from './languages/en-US.json';
// import Spanish from './languages/es-MX.json';
// import German from './languages/de-DE.json';
// import Chinese from './languages/zh-CN.json';
// import Japanese from './languages/ja-JP.json';
// import French from './languages/fr-FR.json';
// import Italian from './languages/it-IT.json';

import './assets/styles/index.scss';
import App from './components/App/App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const local = navigator.language; // const local = 'en-US';
const lang = English;

root.render(
  <React.StrictMode>
    <IntlProvider locale={local} messages={lang}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
