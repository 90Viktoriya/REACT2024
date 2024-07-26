import { Link } from 'react-router-dom';
import styles from './Pagination.module.css';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { RouterPath } from '../Router/Router.enum';
import { useGetCharactersResponse } from '../../hooks/useGetCharactersResponse';
import { useAppSelector } from '../../hooks/ReduxHooks';

export function Pagination() {
  const data = useGetCharactersResponse();
  const page = data?.page;
  const currentPage = useAppSelector((state) => state.navigation.currentPage);

  return (
    <div className={styles.pagination}>
      <Link
        to={currentPage > 1 ? `/${RouterPath.PAGE}/${currentPage - 1}` : `../`}
        className={page?.firstPage ? styles.inactive : styles.active}
      >
        {ComponentsCaptions.PREV}
      </Link>
      <Link
        to={`../${RouterPath.PAGE}/${currentPage + 1}`}
        className={page?.lastPage ? styles.inactive : styles.active}
      >
        {ComponentsCaptions.NEXT}
      </Link>
    </div>
  );
}
