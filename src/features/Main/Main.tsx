import { useMemo, MouseEventHandler, useCallback } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Result } from '../Result/Result';
import { RouterPath } from '../Router/Router.enum';
import { Search } from '../Search/Search';
import styles from './Main.module.css';

export function Main() {
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

  return (
    <section className={styles.main}>
      <div className={isDetailed ? styles.left : styles.center} onClick={handleOnClick}>
        <Search />
        <Result />
      </div>
      {isDetailed && <Outlet />}
    </section>
  );
}
