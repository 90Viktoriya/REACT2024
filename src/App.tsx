import { Component } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorButton } from './features/ErrorButton/ErrorButton';
import { Main } from './features/Main/Main';
import './App.css';
import { ComponentsCaptions } from './data/ComponentsCaptions';

export class App extends Component {
  render() {
    return (
      <ErrorBoundary fallback={<h1>{ComponentsCaptions.ERROR_TITLE}</h1>}>
        <h1>Characters of Star Trek</h1>
        <ErrorButton />
        <Main />
      </ErrorBoundary>
    );
  }
}

export default App;
