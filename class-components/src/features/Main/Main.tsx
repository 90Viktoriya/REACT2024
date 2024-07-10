import { Component } from 'react';
import { Store } from '../../store/store';
import { Search } from '../Search/Search';
import { Result } from '../Result/Result';

export class Main extends Component {
  state = { searchValue: '' };

  componentDidMount(): void {
    this.setState({ searchValue: Store.getSearchValue() });
    console.log(`2 ${this.state.searchValue}`);
  }

  handleOnValueChange = (searchValue: string) => {
    this.setState({ searchValue });
    Store.setSearchValue(searchValue);
    console.log(`1 ${this.state.searchValue}`);
  };

  render() {
    const { searchValue } = this.state;
    return (
      <>
        <Search onSearch={this.handleOnValueChange} />
        <Result searchValue={searchValue} />
      </>
    );
  }
}
