import { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import styles from './Search.module.css';
import { useAppDispatch } from '../../hooks/ReduxHooks';
import { setSearchValue as setSearchValueDispatch } from '../../features/slices/navigation/navigationSlice';
import { useRouter } from 'next/router';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export function Search() {
  const router = useRouter();
  const { searchValue, setSearchValue } = useLocalStorage();
  const [inputValue, setInputValue] = useState(searchValue);
  const [isFirstLoad, setFirstLoad] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchValue.length > 0 && isFirstLoad && searchValue !== router.query.search) {
      router.push(`${router.pathname}?search=${searchValue}`);
      setFirstLoad(false);
    }
  }, [isFirstLoad, router, searchValue]);
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
    dispatch(setSearchValueDispatch(inputValue));
    setSearchValue(inputValue);
    router.push(`${router.pathname}?search=${inputValue}`);
  }, [dispatch, inputValue, router, setSearchValue]);

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
