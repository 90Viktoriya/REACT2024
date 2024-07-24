import { Link } from 'react-router-dom';
import styles from './Pagination.module.css';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { RouterPath } from '../Router/Router.enum';
import { useAppSelector } from '../../hooks/ReduxHooks';
import { useGetCharactersByNameQuery } from '../../services/apiRTK';

export function Pagination() {
  const searchValue = useAppSelector((state) => state.navigation.searchValue);
  const currentPage = useAppSelector((state) => state.navigation.currentPage);
  const { data } = useGetCharactersByNameQuery({ name: searchValue, page: currentPage });
  const page = data?.page;

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
