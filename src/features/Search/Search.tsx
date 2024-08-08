import { MouseEventHandler, useCallback, useState } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import styles from './Search.module.css';
import { useAppDispatch } from '../../hooks/ReduxHooks';
import { setSearchValue } from '../../features/slices/navigation/navigationSlice';
import { useRouter } from 'next/router';

export function Search() {
  const router = useRouter();
  const searchValue = '';
  const [inputValue, setInputValue] = useState(searchValue);
  const dispatch = useAppDispatch();

  const handleOnClick: MouseEventHandler = useCallback(
    (event) => {
      if (event.currentTarget instanceof HTMLElement && event.currentTarget === event.target && router.query.details) {
        router.push(`${router.pathname}?search=${inputValue}`);
      }
    },
    [inputValue, router]
  );
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event?.target.value);
  };

  const handleOnButtonClick = useCallback(() => {
    dispatch(setSearchValue(inputValue));
    router.push(`${router.pathname}?search=${inputValue}`);
  }, [dispatch, inputValue, router]);

  return (
    <div className={styles.search}>
      <input
        name="searchValue"
        className={styles.input}
        type="text"
        defaultValue={router.query.search}
        onChange={handleChange}
        onClick={handleOnClick}
      />
      <button className={styles.btn} onClick={handleOnButtonClick}>
        {ComponentsCaptions.SEARCH}
      </button>
    </div>
  );
}
