import styles from './Selector.module.css';
import { MouseEventHandler, useCallback, useMemo } from 'react';
import { add, remove } from '../slices/selector/selectorSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';

export function Selector({
  uid,
  name,
  gender,
  yearOfBirth
}: {
  uid: string;
  name: string;
  gender: string;
  yearOfBirth: number;
}) {
  const items = useAppSelector((state) => state.selector.selectedItems);
  const checked = useMemo(() => !!items.filter((item) => item.uid === uid).length, [items, uid]);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(() => {
    if (checked) {
      dispatch(remove(uid));
    } else {
      /*const url = location.pathname.includes(RouterPath.DETAILS)
        ? `${location.pathname.slice(0, location.pathname.lastIndexOf('/'))}/${uid}`
        : location.pathname === '/'
          ? `/${RouterPath.DETAILS}/${uid}`
          : `${location.pathname}/${RouterPath.DETAILS}/${uid}`;*/
      const url = 'fdf';
      dispatch(add({ uid, name, gender, yearOfBirth, url }));
    }
  }, [checked, dispatch, gender, name, uid, yearOfBirth]);

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
