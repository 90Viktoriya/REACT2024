import { Link, useParams } from 'react-router-dom';
import styles from './Pagination.module.css';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { RouterPath } from '../Router/Router.enum';
import { useMainLoaderData } from '../../hooks/useMainLoaderData';

export function Pagination() {
  const { page } = useMainLoaderData();
  const { page: currentPage = 0 } = useParams();
  const calculatedPage = +currentPage;

  return (
    <div className={styles.pagination}>
      <Link
        to={calculatedPage > 1 ? `/${RouterPath.PAGE}/${calculatedPage - 1}` : `../`}
        className={page?.firstPage ? styles.inactive : styles.active}
      >
        {ComponentsCaptions.PREV}
      </Link>
      <Link
        to={`../${RouterPath.PAGE}/${calculatedPage + 1}`}
        className={page?.lastPage ? styles.inactive : styles.active}
      >
        {ComponentsCaptions.NEXT}
      </Link>
    </div>
  );
}
