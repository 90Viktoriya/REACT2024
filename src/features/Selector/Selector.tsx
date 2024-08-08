import { useRouter } from 'next/router';
import { MouseEventHandler, useCallback, useMemo } from 'react';
import { add, remove } from '../slices/selector/selectorSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import styles from './Selector.module.css';

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
  const router = useRouter();
  const items = useAppSelector((state) => state.selector.selectedItems);
  const checked = useMemo(() => !!items.filter((item) => item.uid === uid).length, [items, uid]);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(() => {
    if (checked) {
      dispatch(remove(uid));
    } else {
      const url = `${router.pathname}?search=${router.query.search ?? ''}&page=${router.query.page ?? '0'}`;
      dispatch(add({ uid, name, gender, yearOfBirth, url }));
    }
  }, [checked, dispatch, gender, name, router.pathname, router.query.page, router.query.search, uid, yearOfBirth]);

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
