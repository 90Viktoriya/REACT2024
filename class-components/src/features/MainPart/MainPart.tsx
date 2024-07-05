import { Component } from 'react';
import { connection } from '../../services/api';
import { Animals, HandleOnSearch } from '../../App.types';
import { Store } from '../../store/store';

export class MainPart extends Component<{ onSearch: HandleOnSearch; isLoaded: boolean }, { data: Array<string> }> {
  state = { data: [] };

  componentDidMount(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {
    const data = await connection.search(Store.getSearchValue(), this.handleOnDrawItems);
    console.log(data);
    this.props.onSearch(true);
  }

  handleOnDrawItems = (data: []) => {
    this.setState({ data: data });
  };

  componentDidUpdate(prevProps: Readonly<{ onSearch: HandleOnSearch; isLoaded: boolean }>): void {
    if (prevProps.isLoaded && !this.props.isLoaded) {
      this.loadData();
    }
  }
  render() {
    return (
      <>
        {this.state.data.map((item: Animals) => (
          <p key={item.uid}>{item.name}</p>
        ))}
      </>
    );
  }
}
