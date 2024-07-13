import styles from './Result.module.css';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { NavLink, useLoaderData } from 'react-router-dom';
import { Characters, Page } from '../../services/api.types';
import { RouterPath } from '../Router/Router.enum';
import { Pagination } from '../Pagination/Pagination';

export function Result() {
  const { characters } = useLoaderData() as { characters: Characters[]; page: Page };

  if (!characters.length) {
    return <h2 className={styles.nothing}>{ComponentsCaptions.NOTHING_FOUND}</h2>;
  }
  return (
    <>
      <section className={styles.result}>
        {characters.map((item: Characters) => (
          <NavLink
            key={item.uid}
            to={`${RouterPath.DETAILS}/${item.uid}`}
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? `${styles.card} ${styles.active}` : `${styles.card}`
            }
          >
            <p className={styles.title}>{item.name}</p>
            <div className={styles.description}>
              <p>
                Gender: <span className={styles.span}>{item.gender ?? ComponentsCaptions.UNKNOWN_VALUE}</span>
              </p>
              <p className={styles.description}>
                Year of birthday:{' '}
                <span className={styles.span}>{item.yearOfBirth ?? ComponentsCaptions.UNKNOWN_VALUE}</span>
              </p>
            </div>
          </NavLink>
        ))}
      </section>
      <Pagination />
    </>
  );
}
