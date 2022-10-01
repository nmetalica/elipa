import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './App';
import {I18nextProvider} from "react-i18next";
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="">
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
