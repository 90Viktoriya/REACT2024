import { useCallback } from 'react';
import { ComponentsCaptions } from '../../../data/ComponentsCaptions';
import { useTheme } from '../../../hooks/useTheme';
import styles from './SwitchThemeButton.module.css';

export function SwitchThemeButton() {
  const { toggleTheme } = useTheme();

  const handleOnClick = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <button className={styles.switch} onClick={handleOnClick}>
      {ComponentsCaptions.SWITCH_THEME}
    </button>
  );
}
