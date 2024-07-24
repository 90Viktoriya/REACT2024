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

export function Main() {
  const searchValue = useAppSelector((state) => state.navigation.searchValue);
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
        navigate('..');
      }
    },
    [isDetailed, navigate]
  );
  if (isFetching && !isDetailed) {
    return (
      <section className={styles.main}>
        <Loader />
      </section>
    );
  }
  return (
    <>
      <h1>Characters of Star Trek</h1>
      <section className={styles.main}>
        <section className={isDetailed ? styles.left : styles.center} onClick={handleOnClick}>
          <Search />
          <Result />
        </section>
        {isDetailed && <Outlet />}
      </section>
    </>
  );
}
