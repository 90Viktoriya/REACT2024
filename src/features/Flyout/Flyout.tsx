import { useCallback } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import styles from './Flyout.module.css';
import { removeAll } from '../slices/selector/selectorSlice';

export function Flyout() {
  const selectedCount = useAppSelector((state) => state.selector.count);
  const dispatch = useAppDispatch();

  const handleOnClickUnselect = useCallback(() => {
    dispatch(removeAll());
  }, [dispatch]);

  const handleOnClickDownload = useCallback(() => {}, []);

  return (
    <div className={styles.flyout}>
      Count of selected items: <span>{selectedCount}</span>
      <button className={`${styles.btn} ${styles.first}`} onClick={handleOnClickUnselect}>
        {ComponentsCaptions.UNSELECT}
      </button>
      <button className={styles.btn} onClick={handleOnClickDownload}>
        {ComponentsCaptions.DOWNLOAD}
      </button>
    </div>
  );
}
