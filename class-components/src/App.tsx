import { Component } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorThrow } from './features/ErrorThrowPart/ErrorThrowPart';
import { SearchPart } from './features/SearchPart/SearchPart';
import { MainPart } from './features/MainPart/MainPart';
import './App.css';

export class App extends Component {
  state = { isLoaded: false };

  handleOnSearch = (isLoadedValue: boolean) => {
    this.setState({ isLoaded: isLoadedValue });
  };

  render() {
    return (
      <ErrorBoundary fallback={<h1>OOPS! Something went wrong</h1>}>
        <h1>Characters of Star Trek</h1>
        <ErrorThrow />
        <SearchPart onSearch={this.handleOnSearch} />
        <MainPart onSearch={this.handleOnSearch} isLoaded={this.state.isLoaded} />
      </ErrorBoundary>
    );
  }
}

export default App;
