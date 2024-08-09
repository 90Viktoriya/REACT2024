import { Router, useRouter } from 'next/router';
import Link from 'next/link';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import styles from './DetailedCard.module.css';
import { FieldCaptions } from '../../data/FieldCaptions';
import { DetailsBlock } from './DetailsBlock/DetailsBlock';
import { Character } from '../../services/api.types';
import { Loader } from '../../components/Loader/Loader';
import { useEffect, useState } from 'react';

export function DetailedCard({ details }: { details: Character }) {
  const router = useRouter();
  const isDetails = !!router.query.details;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setIsLoading(true);
    };
    const end = () => {
      setIsLoading(false);
    };
    if (isDetails) {
      Router.events.on('routeChangeStart', start);
    }
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, [isDetails]);

  if (isLoading) {
    return (
      <div className={styles.details}>
        <Loader />
      </div>
    );
  }
  return (
    <section className={styles.details}>
      <h2>{details.name}</h2>
      <div className={styles.description}>
        <p>
          {FieldCaptions.GENDER}
          {details.gender ?? ComponentsCaptions.UNKNOWN_VALUE}
        </p>
        <p>
          {FieldCaptions.YEAR_OF_BIRTH}
          {details.yearOfBirth ?? ComponentsCaptions.UNKNOWN_VALUE}
        </p>
        <p>
          {FieldCaptions.YEAR_OF_DEATH}
          {details.yearOfDeath ?? ComponentsCaptions.UNKNOWN_VALUE}
        </p>
        <DetailsBlock
          title={FieldCaptions.MOVIES}
          itemsList={details.movies ?? []}
          detailsList={[
            { title: FieldCaptions.TITLE, key: 'title' },
            { title: FieldCaptions.RELEASE_DATE, key: 'usReleaseDate' }
          ]}
        />
        <DetailsBlock
          title={FieldCaptions.EPISODES}
          itemsList={details.episodes ?? []}
          detailsList={[
            { title: FieldCaptions.TITLE, key: 'title' },
            { title: FieldCaptions.EPISODE_NUMBER, key: 'episodeNumber' }
          ]}
        />
        <DetailsBlock
          title={FieldCaptions.PERFORMERS}
          itemsList={details.performers ?? []}
          detailsList={[
            { title: FieldCaptions.NAME, key: 'name' },
            { title: FieldCaptions.DATE_OF_BIRTH, key: 'dateOfBirth' },
            { title: FieldCaptions.PLACE_OF_BIRTH, key: 'placeOfBirth' }
          ]}
        />
      </div>
      <Link
        href={`${router.pathname}?search=${router.query.search ?? ''}&page=${router.query.page ?? '0'}`}
        className={styles.close}
      >
        {ComponentsCaptions.CLOSE}
      </Link>
    </section>
  );
}
