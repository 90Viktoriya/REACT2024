import { ErrorBoundary } from './components/ErrorBoundary';
import './App.css';
import { ComponentsCaptions } from './data/ComponentsCaptions';
import { Router } from './features/Router/Router';

export function App() {
  return (
    <ErrorBoundary fallback={<h1>{ComponentsCaptions.ERROR_TITLE}</h1>}>
      <Router />
    </ErrorBoundary>
  );
}

export default App;
