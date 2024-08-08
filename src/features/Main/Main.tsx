import { useRouter } from 'next/router';
import { MouseEventHandler, useCallback } from 'react';
import { Result } from '../Result/Result';
import { Search } from '../Search/Search';
import { Character, CharactersResponse } from '../../services/api.types';
import { DetailedCard } from '../DetailedCard/DetailedCard';
import styles from './Main.module.css';

export function Main({ data, details }: { data: CharactersResponse; details: Character | null }) {
  const router = useRouter();
  const handleOnClick: MouseEventHandler = useCallback(
    (event) => {
      if (event.currentTarget instanceof HTMLElement && event.currentTarget === event.target && details) {
        router.push(`${router.pathname}?search=${router.query.search ?? ''}&page=${router.query.page ?? '0'}`);
      }
    },
    [details, router]
  );

  return (
    <section className={styles.main}>
      <div className={details ? styles.left : styles.center} onClick={handleOnClick}>
        <Search />
        <Result data={data} />
      </div>
      {details && <DetailedCard details={details} />}
    </section>
  );
}
