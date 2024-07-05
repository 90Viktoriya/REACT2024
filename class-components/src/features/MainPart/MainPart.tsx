import { Component } from 'react';
import { connection } from '../../services/api';
import { Animals, HandleOnSearch } from '../../App.types';
import { Store } from '../../store/store';
import styles from './MainPart.module.css';
import { Loader } from '../../components/Loader';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';

export class MainPart extends Component<{ onSearch: HandleOnSearch; isLoaded: boolean }, { data: Array<string> }> {
  state = { data: [] };

  componentDidMount(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {
    connection.search(Store.getSearchValue(), this.handleOnDrawItems, this.props.onSearch);
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
    if (!this.props.isLoaded) {
      return <Loader />;
    }
    if (this.state.data.length === 0) {
      return <h2 className={styles.nothing}>{ComponentsCaptions.NOTHING_FOUND}</h2>;
    }
    return (
      <section className={styles.main}>
        {this.state.data.map((item: Animals) => (
          <div key={item.uid} className={styles.card}>
            <p className={styles.title}>{item.name}</p>
            <div className={styles.description}>
              <p>
                Gender: <span className={styles.span}>{item.gender ?? 'unknown'}</span>
              </p>
              <p className={styles.description}>
                Year of birthday: <span className={styles.span}>{item.yearOfBirth ?? 'unknown'}</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
