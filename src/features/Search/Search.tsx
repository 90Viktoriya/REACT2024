import { MouseEventHandler, useCallback, useState } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import styles from './Search.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { RouterPath } from '../Router/Router.enum';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { setSearchValue as setSearchValueAction } from '../../features/slices/navigation/navigationSlice';

export function Search() {
  const searchValue = useAppSelector((state) => state.navigation.searchValue);
  const { setSearchValue } = useLocalStorage();
  const [inputValue, setInputValue] = useState(searchValue);
  const dispatch = useAppDispatch();

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

  const handleOnButtonClick = useCallback(() => {
    setSearchValue(inputValue);
    dispatch(setSearchValueAction(inputValue));
    navigate('..');
  }, [dispatch, inputValue, navigate, setSearchValue]);

  return (
    <div className={styles.search}>
      <input
        name="searchValue"
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onClick={handleOnClick}
      />
      <button className={styles.btn} onClick={handleOnButtonClick}>
        {ComponentsCaptions.SEARCH}
      </button>
    </div>
  );
}
