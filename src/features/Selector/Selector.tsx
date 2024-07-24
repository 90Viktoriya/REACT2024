import styles from './Selector.module.css';
import { MouseEventHandler, useCallback, useMemo } from 'react';
import { add, remove } from '../slices/selector/selectorSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';

export function Selector({ uid }: { uid: string }) {
  const items = useAppSelector((state) => state.selector.selectedItems);
  const checked = useMemo(() => items.includes(uid), [items, uid]);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(() => {
    if (checked) {
      dispatch(remove(uid));
    } else {
      dispatch(add(uid));
    }
  }, [checked, dispatch, uid]);
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
