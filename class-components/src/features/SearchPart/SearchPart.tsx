import { Component } from 'react';
import { ComponentCaptions } from '../../data/componentCaptions';
import { connection } from '../../services/api';
import { Store } from '../../store/store';

export class SearchPart extends Component {
  state = { inputValue: Store.getSearchValue() };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ inputValue: event?.target.value });
  };

  handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    Store.setSearchValue(this.state.inputValue);
    connection.search(this.state.inputValue);
  };

  componentDidMount(): void {
    connection.search(this.state.inputValue);
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleClick}>{ComponentCaptions.SEARCH}</button>
      </>
    );
  }
}
