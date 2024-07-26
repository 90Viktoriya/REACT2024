import { Search } from '../../features/Search/Search';
import { Result } from '../../features/Result/Result';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './Main.module.css';
import { Loader } from '../../components/Loader/Loader';
import { MouseEventHandler, useCallback, useEffect, useMemo } from 'react';
import { RouterPath } from '../../features/Router/Router.enum';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { useGetCharactersByNameQuery } from '../../services/apiRTK';
import { setCurrentPage } from '../../features/slices/navigation/navigationSlice';
import { Flyout } from '../../features/Flyout/Flyout';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { SwitchThemeButton } from '../../features/Theme/SwitchThemeButton/SwitchThemeButton';
import { useTheme } from '../../hooks/useTheme';

export function Main() {
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

  const navigate = useNavigate();
  const location = useLocation();
  const isDetailed = useMemo(() => location.pathname.includes(RouterPath.DETAILS), [location.pathname]);

  const handleOnClick: MouseEventHandler = useCallback(
    (event) => {
      if (event.currentTarget instanceof HTMLElement && event.currentTarget === event.target && isDetailed) {
        navigate(location.pathname.slice(0, location.pathname.indexOf(RouterPath.DETAILS)));
      }
    },
    [isDetailed, location.pathname, navigate]
  );
  if (isFetching && !isDetailed) {
    return (
      <div className={`${isDark ? styles.dark : styles.light} ${styles.wrapper}`}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={`${isDark ? styles.dark : styles.light} ${styles.wrapper}`}>
      <div className={`${styles.top}`}>
        <div className={`${styles.header}`}>
          <h1>{ComponentsCaptions.TITLE}</h1>
          <SwitchThemeButton />
        </div>
        <section className={styles.main}>
          <section className={isDetailed ? styles.left : styles.center} onClick={handleOnClick}>
            <Search />
            <Result />
          </section>
          {isDetailed && <Outlet />}
        </section>
      </div>
      {!!selectedCount && <Flyout />}
    </div>
  );
}
