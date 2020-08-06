import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ContactProvider } from './Context/Context.js';


ReactDOM.render(
  <ContactProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
</ContactProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
