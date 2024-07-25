import { useAppSelector } from '../../hooks/ReduxHooks';
import styles from './Flyout.module.css';

export function Flyout() {
  const selectedCount = useAppSelector((state) => state.selector.count);
  return (
    <div className={styles.flyout}>
      Count of selected items: <span>{selectedCount}</span>
    </div>
  );
}
