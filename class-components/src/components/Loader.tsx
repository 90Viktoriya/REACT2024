import { Component } from 'react';
import styles from './components.module.css';

export class Loader extends Component {
  render() {
    return <div className={styles.loader}></div>;
  }
}
