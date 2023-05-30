import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { CustomThemeProvider } from 'shared/styles/CustomThemeProvider';
import { basename } from 'shared/constants/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CustomThemeProvider>
            <BrowserRouter basename={basename}>
              <App />
            </BrowserRouter>
          </CustomThemeProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
