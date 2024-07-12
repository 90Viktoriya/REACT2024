import { Component } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import styles from './ErrorButton.module.css';

export class ErrorButton extends Component<{ children?: React.ReactNode }, { counter: number }> {
  state = { counter: 0 };

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    if (this.state.counter) {
      throw new Error(ComponentsCaptions.ERROR);
    }
    return (
      <button className={styles.btn} onClick={this.handleClick}>
        {ComponentsCaptions.ERROR}
      </button>
    );
  }
}
