import { Component } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { ERROR_MSG } from './ErrorThrowPart.constants';
import styles from './ErrorThrowPart.module.css';

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
    return (
      <button className={styles.btn} onClick={this.handleClick}>
        {ComponentsCaptions.ERROR}
      </button>
    );
  }
}
