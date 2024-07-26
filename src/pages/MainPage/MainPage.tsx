import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import styles from './MainPage.module.css';
import { Loader } from '../../components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { useGetCharactersByNameQuery } from '../../services/apiRTK';
import { setCurrentPage } from '../../features/slices/navigation/navigationSlice';
import { Flyout } from '../../features/Flyout/Flyout';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { SwitchThemeButton } from '../../features/Theme/SwitchThemeButton/SwitchThemeButton';
import { useTheme } from '../../hooks/useTheme';
import { Main } from '../../features/Main/Main';

export function MainPage() {
  const { isDark } = useTheme();
  const searchValue = useAppSelector((state) => state.navigation.searchValue);
  const selectedCount = useAppSelector((state) => state.selector.count);
  const { page: currentPage = 0 } = useParams();
  const calculatedPage = +currentPage;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCurrentPage(calculatedPage));
  }, [calculatedPage, dispatch]);
  const { isFetching } = useGetCharactersByNameQuery({ name: searchValue, page: calculatedPage });

  if (isFetching) {
    return (
      <div className={`${isDark ? styles.dark : styles.light} ${styles.wrapper}`}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={`${isDark ? styles.dark : styles.light} ${styles.wrapper}`}>
      <div className={`${styles.top}`}>
        <section className={`${styles.header}`}>
          <h1>{ComponentsCaptions.TITLE}</h1>
          <SwitchThemeButton />
        </section>
        <Main />
      </div>
      {!!selectedCount && <Flyout />}
    </div>
  );
}
