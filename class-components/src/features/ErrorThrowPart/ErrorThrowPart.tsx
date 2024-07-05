import { Component } from 'react';
import { ComponentCaptions } from '../../data/componentCaptions';
import { ERROR_MSG } from './ErrorThrowPart.constants';

export class ErrorThrow extends Component<{ children?: React.ReactNode }, { counter: number }> {
  state = { counter: 0 };

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    if (this.state.counter) {
      throw new Error(ERROR_MSG);
    }
    return <button onClick={this.handleClick}>{ComponentCaptions.ERROR}</button>;
  }
}
