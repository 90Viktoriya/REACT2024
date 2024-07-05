import { Component } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorThrow } from './features/ErrorThrowPart/ErrorThrowPart';
import { SearchPart } from './features/SearchPart/SearchPart';
import { MainPart } from './features/MainPart/MainPart';
import './App.css';
import { ComponentsCaptions } from './data/ComponentsCaptions';

export class App extends Component {
  state = { isLoaded: false };

  handleOnSearch = (isLoadedValue: boolean) => {
    this.setState({ isLoaded: isLoadedValue });
  };

  render() {
    return (
      <ErrorBoundary fallback={<h1>{ComponentsCaptions.ERROR_TITLE}</h1>}>
        <h1>Characters of Star Trek</h1>
        <ErrorThrow />
        <SearchPart onSearch={this.handleOnSearch} />
        <MainPart onSearch={this.handleOnSearch} isLoaded={this.state.isLoaded} />
      </ErrorBoundary>
    );
  }
}

export default App;
