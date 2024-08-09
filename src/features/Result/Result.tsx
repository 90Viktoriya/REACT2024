import styles from './Result.module.css';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { Characters, CharactersResponse } from '../../services/api.types';
import { RouterPath } from '../Router/Router.enum';
import { Pagination } from '../Pagination/Pagination';
import { FieldCaptions } from '../../data/FieldCaptions';
import { Selector } from '../Selector/Selector';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Result({ data }: { data: CharactersResponse }) {
  const router = useRouter();

  const characters = data.characters ?? [];
  if (!characters.length) {
    return <h2 className={styles.nothing}>{ComponentsCaptions.NOTHING_FOUND}</h2>;
  }
  return (
    <>
      <section className={styles.result}>
        {characters.map((item: Characters) => (
          <Link
            key={item.uid}
            href={`${router.pathname}?search=${router.query.search ?? ''}&page=${router.query.page ?? '0'}&${RouterPath.DETAILS}=${item.uid}`}
            className={`${styles.card} ${styles.active}`}
          >
            <p className={styles.title}>{item.name}</p>
            <div className={styles.bottom}>
              <Selector uid={item.uid} name={item.name} gender={item.gender} yearOfBirth={item.yearOfBirth} />
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
          </Link>
        ))}
      </section>
      <Pagination page={data?.page} />
    </>
  );
}
