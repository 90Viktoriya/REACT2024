import styles from './Pagination.module.css';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Page } from '../../services/api.types';
import getFirstValue from '../../utils/getFirstValue';

export function Pagination({ page }: { page: Page | undefined }) {
  const router = useRouter();
  const currentPage = router.query.page ? Number(getFirstValue(router.query.page)) : 0;

  return (
    <div className={styles.pagination}>
      <Link
        href={`${router.pathname}?search=${router.query.search}&page=${currentPage - 1}`}
        className={page?.firstPage ? styles.inactive : styles.active}
      >
        {ComponentsCaptions.PREV}
      </Link>
      <Link
        href={`${router.pathname}?search=${router.query.search}&page=${currentPage + 1}`}
        className={page?.lastPage ? styles.inactive : styles.active}
      >
        {ComponentsCaptions.NEXT}
      </Link>
    </div>
  );
}
