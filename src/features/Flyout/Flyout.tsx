import { useCallback } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import styles from './Flyout.module.css';
import { removeAll } from '../slices/selector/selectorSlice';
import convertData from '../../utils/convertData';

export function Flyout() {
  const selectedCount = useAppSelector((state) => state.selector.count);
  const selectedItems = useAppSelector((state) => state.selector.selectedItems);
  const dispatch = useAppDispatch();

  const handleOnClickUnselect = useCallback(() => {
    dispatch(removeAll());
  }, [dispatch]);

  const handleOnClickDownload = useCallback(() => {
    const blob = new Blob([convertData(selectedItems)], { type: 'text/csv' });
    const link = document.createElement('a');
    link.download = `${selectedCount}_characters.csv`;
    link.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    link.dispatchEvent(clickEvt);
    link.remove();
  }, [selectedCount, selectedItems]);

  return (
    <div className={styles.flyout}>
      {ComponentsCaptions.ITEMS_COUNT} <span>{selectedCount}</span>
      <button className={`${styles.btn} ${styles.first}`} onClick={handleOnClickUnselect}>
        {ComponentsCaptions.UNSELECT}
      </button>
      <button className={styles.btn} onClick={handleOnClickDownload}>
        {ComponentsCaptions.DOWNLOAD}
      </button>
    </div>
  );
}
