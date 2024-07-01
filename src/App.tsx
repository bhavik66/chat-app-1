import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import RootRouter from './Routes';
import { Provider } from 'react-redux';
import store from './store/store';
import { ErrorBoundary } from 'react-error-boundary';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <RootRouter />
            </ThemeProvider>
          </Provider>
        </I18nextProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
