import { useState } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import styles from './Search.module.css';
import { useFetcher } from 'react-router-dom';

export function Search({ searchValue }: { searchValue: string }) {
  const [inputValue, setInputValue] = useState(searchValue);
  const fetcher = useFetcher();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event?.target.value);
  };

  return (
    <fetcher.Form method="post" className={styles.search}>
      <input name="searchValue" className={styles.input} type="text" value={inputValue} onChange={handleChange} />
      <button type="submit" className={styles.btn}>
        {ComponentsCaptions.SEARCH}
      </button>
    </fetcher.Form>
  );
}
