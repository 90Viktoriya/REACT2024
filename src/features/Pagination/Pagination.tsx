import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Characters, Page } from '../../services/api.types';
import { useMemo } from 'react';
import styles from './Pagination.module.css';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { RouterPath } from '../Router/Router.enum';

export function Pagination() {
  const { page } = useLoaderData() as { characters: Characters[]; page: Page };
  const { page: currentPage } = useParams();
  const calculatedPage = useMemo(() => Number.parseInt(currentPage ?? '0'), [currentPage]);

  return (
    <div className={styles.pagination}>
      <Link
        to={calculatedPage > 1 ? `/${RouterPath.PAGE}/${calculatedPage - 1}` : `../`}
        className={page.firstPage ? styles.inactive : styles.active}
      >
        {ComponentsCaptions.PREV}
      </Link>
      <Link
        to={`../${RouterPath.PAGE}/${calculatedPage + 1}`}
        className={page.lastPage ? styles.inactive : styles.active}
      >
        {ComponentsCaptions.NEXT}
      </Link>
    </div>
  );
}
