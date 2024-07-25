import styles from './Selector.module.css';
import { MouseEventHandler, useCallback, useMemo } from 'react';
import { add, remove } from '../slices/selector/selectorSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { useGetCharactersByNameQuery } from '../../services/apiRTK';
import { useLocation } from 'react-router-dom';
import { RouterPath } from '../Router/Router.enum';

export function Selector({ uid }: { uid: string }) {
  const items = useAppSelector((state) => state.selector.selectedItems);
  const checked = useMemo(() => !!items.filter((item) => item.uid === uid).length, [items, uid]);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const searchValue = useAppSelector((state) => state.navigation.searchValue);
  const currentPage = useAppSelector((state) => state.navigation.currentPage);
  const { data } = useGetCharactersByNameQuery({ name: searchValue, page: currentPage });
  const character = useMemo(() => {
    const characters = data?.characters || [];
    return characters.filter((item) => item.uid === uid)[0];
  }, [data?.characters, uid]);

  const handleChange = useCallback(() => {
    if (checked) {
      dispatch(remove(uid));
    } else {
      const url = location.pathname.includes(RouterPath.DETAILS)
        ? `${location.pathname.slice(0, location.pathname.lastIndexOf('/'))}/${uid}`
        : location.pathname === '/'
          ? `/${RouterPath.DETAILS}/${uid}`
          : `${location.pathname}/${RouterPath.DETAILS}/${uid}`;
      const { name, gender, yearOfBirth } = character;
      dispatch(add({ uid, name, gender, yearOfBirth, url }));
    }
  }, [character, checked, dispatch, location.pathname, uid]);
  const handleClick: MouseEventHandler = useCallback((event) => {
    event.stopPropagation();
  }, []);
  return (
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
