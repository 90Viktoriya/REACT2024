import { Component } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { Store } from '../../store/store';
import { HandleOnValueChange } from '../../App.types';
import styles from './Search.module.css';

export class Search extends Component<{ onSearch: HandleOnValueChange }> {
  state = { inputValue: Store.getSearchValue() };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ inputValue: event?.target.value });
  };

  handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    this.props.onSearch(this.state.inputValue);
  };

  render() {
    return (
      <section className={styles.search}>
        <input className={styles.input} type="text" value={this.state.inputValue} onChange={this.handleChange} />
        <button className={styles.btn} onClick={this.handleClick}>
          {ComponentsCaptions.SEARCH}
        </button>
      </section>
    );
  }
}
