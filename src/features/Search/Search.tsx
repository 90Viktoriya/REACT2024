import { MouseEventHandler, useCallback, useState } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import styles from './Search.module.css';
import { useFetcher, useLocation, useNavigate } from 'react-router-dom';
import { RouterPath } from '../Router/Router.enum';

export function Search({ searchValue }: { searchValue: string }) {
  const [inputValue, setInputValue] = useState(searchValue);
  const fetcher = useFetcher();

  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick: MouseEventHandler = useCallback(
    (event) => {
      if (
        event.currentTarget instanceof HTMLElement &&
        event.currentTarget === event.target &&
        location.pathname.includes(RouterPath.DETAILS)
      ) {
        navigate('..');
      }
    },
    [location.pathname, navigate]
  );
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event?.target.value);
  };

  return (
    <fetcher.Form method="post" className={styles.search}>
      <input
        name="searchValue"
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onClick={handleOnClick}
      />
      <button type="submit" className={styles.btn}>
        {ComponentsCaptions.SEARCH}
      </button>
    </fetcher.Form>
  );
}
