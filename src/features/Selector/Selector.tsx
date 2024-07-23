import styles from './Selector.module.css';
import { MouseEventHandler, useCallback } from 'react';
import { add, remove } from './selectorSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';

export function Selector({ uid }: { uid: string }) {
  const items = useAppSelector((state) => state.selector.selectedItems);
  const checked = items.includes(uid);

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
