import type { AppProps } from 'next/app';
import React from 'react';
import '../src/App.css';
import { ErrorBoundary } from '../src/components//ErrorBoundary/ErrorBoundary';
import { ComponentsCaptions } from '../src/data/ComponentsCaptions';
import { Provider } from 'react-redux';
import { storeRedux } from '../src/store/storeRedux';
import { ThemeProvider } from '../src/features/Theme/ThemeContext/ThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Provider store={storeRedux}>
          <ErrorBoundary fallback={<h1>{ComponentsCaptions.ERROR_TITLE}</h1>}>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Provider>
      </ThemeProvider>
    </>
  );
}
