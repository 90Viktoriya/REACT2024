import styles from './Result.module.css';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { NavLink } from 'react-router-dom';
import { Characters } from '../../services/api.types';
import { RouterPath } from '../Router/Router.enum';
import { Pagination } from '../Pagination/Pagination';
import { FieldCaptions } from '../../data/FieldCaptions';
import { Selector } from '../Selector/Selector';
import { useGetCharactersResponse } from '../../hooks/useGetCharactersResponse';

export function Result() {
  const data = useGetCharactersResponse();
  const characters = data?.characters || [];

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
            <div className={styles.bottom}>
              <Selector uid={item.uid} />
              <div className={styles.description}>
                <p>
                  {FieldCaptions.GENDER}
                  <span className={styles.span}>{item.gender ?? ComponentsCaptions.UNKNOWN_VALUE}</span>
                </p>
                <p className={styles.description}>
                  {FieldCaptions.YEAR_OF_BIRTH}
                  <span className={styles.span}>{item.yearOfBirth ?? ComponentsCaptions.UNKNOWN_VALUE}</span>
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </section>
      <Pagination />
    </>
  );
}
