import { Component } from 'react';
import { connection } from '../../services/api';
import { Characters } from '../../App.types';
import styles from './Result.module.css';
import { Loader } from '../../components/Loader';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';

export class Result extends Component<{ searchValue: string }, { data: Array<string>; isLoaded: boolean }> {
  state = { data: [], isLoaded: false };

  componentDidMount(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {
    this.setState({ isLoaded: false });
    connection.search(this.props.searchValue, this.handleOnDrawItems);
  }

  handleOnDrawItems = (data: []) => {
    this.setState({ data, isLoaded: true });
  };

  componentDidUpdate(prevProps: Readonly<{ searchValue: string }>): void {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.loadData();
    }
  }
  render() {
    const {
      state: { data, isLoaded }
    } = this;

    if (!isLoaded) {
      return <Loader />;
    }
    if (!data.length) {
      return <h2 className={styles.nothing}>{ComponentsCaptions.NOTHING_FOUND}</h2>;
    }
    return (
      <section className={styles.main}>
        {data.map((item: Characters) => (
          <div key={item.uid} className={styles.card}>
            <p className={styles.title}>{item.name}</p>
            <div className={styles.description}>
              <p>
                Gender: <span className={styles.span}>{item.gender ?? ComponentsCaptions.UNKNOWN_VALUE}</span>
              </p>
              <p className={styles.description}>
                Year of birthday:{' '}
                <span className={styles.span}>{item.yearOfBirth ?? ComponentsCaptions.UNKNOWN_VALUE}</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
