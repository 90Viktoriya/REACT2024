import { ErrorBoundary } from './components/ErrorBoundary';
import { Main } from './features/Main/Main';
import './App.css';
import { ComponentsCaptions } from './data/ComponentsCaptions';

export function App() {
  return (
    <ErrorBoundary fallback={<h1>{ComponentsCaptions.ERROR_TITLE}</h1>}>
      <h1>Characters of Star Trek</h1>
      <Main />
    </ErrorBoundary>
  );
}

export default App;
