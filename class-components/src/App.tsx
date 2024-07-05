import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorThrow } from './features/ErrorThrowPart/ErrorThrowPart';
import { SearchPart } from './features/SearchPart/SearchPart';

function App() {
  return (
    <>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <SearchPart />
        <ErrorThrow />
      </ErrorBoundary>
    </>
  );
}

export default App;
