import { ErrorBoundary } from './components//ErrorBoundary/ErrorBoundary';
import './App.css';
import { ComponentsCaptions } from './data/ComponentsCaptions';
import { Router } from './features/Router/Router';
import { Provider } from 'react-redux';
import { storeRedux } from './store/storeRedux';
import { ThemeProvider } from './features/Theme/ThemeContext/ThemeProvider';

export function App() {
  return (
    <ThemeProvider>
      <Provider store={storeRedux}>
        <ErrorBoundary fallback={<h1>{ComponentsCaptions.ERROR_TITLE}</h1>}>
          <Router />
        </ErrorBoundary>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
