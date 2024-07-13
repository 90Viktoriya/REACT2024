import { Search } from '../../features/Search/Search';
import { Result } from '../../features/Result/Result';
import { Outlet, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import styles from './Main.module.css';
import { Loader } from '../../components/Loader';
import { MouseEventHandler, useCallback, useMemo } from 'react';
import { RouterPath } from '../../features/Router/Router.enum';

export function Main({ searchValue }: { searchValue: string }) {
  const navigation = useNavigation();
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
  if (navigation.state === 'loading' && !isDetailed) {
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
          <Search searchValue={searchValue} />
          <Result />
        </section>
        {isDetailed && <Outlet />}
      </section>
    </>
  );
}
