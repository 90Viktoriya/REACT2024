import { Component } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { Store } from '../../store/store';
import { HandleOnSearch } from '../../App.types';
import styles from './SearchPart.module.css';

export class SearchPart extends Component<{ onSearch: HandleOnSearch }, { inputValue: string }> {
  state = { inputValue: Store.getSearchValue() };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ inputValue: event?.target.value });
  };

  handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    Store.setSearchValue(this.state.inputValue);
    this.props.onSearch(false);
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
