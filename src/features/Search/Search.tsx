import { useState } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { HandleOnValueChange } from '../../App.types';
import styles from './Search.module.css';

export function Search({ onSearch, searchValue }: { onSearch: HandleOnValueChange; searchValue: string }) {
  const [inputValue, setInputValue] = useState(searchValue);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event?.target.value);
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    onSearch(inputValue);
  };

  return (
    <section className={styles.search}>
      <input className={styles.input} type="text" value={inputValue} onChange={handleChange} />
      <button className={styles.btn} onClick={handleClick}>
        {ComponentsCaptions.SEARCH}
      </button>
    </section>
  );
}
