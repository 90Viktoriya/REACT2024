import { ErrorBoundary } from './components//ErrorBoundary/ErrorBoundary';
import './App.css';
import { ComponentsCaptions } from './data/ComponentsCaptions';
import { Router } from './features/Router/Router';
import { Provider } from 'react-redux';
import { storeRedux } from './store/storeRedux';

export function App() {
  return (
    <Provider store={storeRedux}>
      <ErrorBoundary fallback={<h1>{ComponentsCaptions.ERROR_TITLE}</h1>}>
        <Router />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
