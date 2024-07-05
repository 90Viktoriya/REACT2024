import { Component } from 'react';
import { ComponentCaptions } from '../../data/componentCaptions';
import { connection } from '../../services/api';

export class SearchPart extends Component {
  componentDidMount(): void {
    this.setupConnection();
  }
  setupConnection() {
    connection.getResult();
  }
  render() {
    return (
      <>
        <input type="text" />
        <button>{ComponentCaptions.SEARCH}</button>
      </>
    );
  }
}
