import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import styles from './DetailedCard.module.css';
import { FieldCaptions } from '../../data/FieldCaptions';
import { DetailsBlock } from './DetailsBlock/DetailsBlock';
import { CharacterResponse } from '../../services/api.types';
import { useRouter } from 'next/router';
import Link from 'next/link';

export function DetailedCard({ details }: { details: CharacterResponse }) {
  const router = useRouter();
  const character = details.character;

  return (
    <section className={styles.details}>
      <h2>{character?.name}</h2>
      <div className={styles.description}>
        <p>
          {FieldCaptions.GENDER}
          {character?.gender ?? ComponentsCaptions.UNKNOWN_VALUE}
        </p>
        <p>
          {FieldCaptions.YEAR_OF_BIRTH}
          {character?.yearOfBirth ?? ComponentsCaptions.UNKNOWN_VALUE}
        </p>
        <p>
          {FieldCaptions.YEAR_OF_DEATH}
          {character?.yearOfDeath ?? ComponentsCaptions.UNKNOWN_VALUE}
        </p>
        <DetailsBlock
          title={FieldCaptions.MOVIES}
          itemsList={character?.movies ?? []}
          detailsList={[
            { title: FieldCaptions.TITLE, key: 'title' },
            { title: FieldCaptions.RELEASE_DATE, key: 'usReleaseDate' }
          ]}
        />
        <DetailsBlock
          title={FieldCaptions.EPISODES}
          itemsList={character?.episodes ?? []}
          detailsList={[
            { title: FieldCaptions.TITLE, key: 'title' },
            { title: FieldCaptions.EPISODE_NUMBER, key: 'episodeNumber' }
          ]}
        />
        <DetailsBlock
          title={FieldCaptions.PERFORMERS}
          itemsList={character?.performers ?? []}
          detailsList={[
            { title: FieldCaptions.NAME, key: 'name' },
            { title: FieldCaptions.DATE_OF_BIRTH, key: 'dateOfBirth' },
            { title: FieldCaptions.PLACE_OF_BIRTH, key: 'placeOfBirth' }
          ]}
        />
      </div>
      <Link
        href={`${router.pathname}?search=${router.query.search}&page=${router.query.page}`}
        className={styles.close}
      >
        {ComponentsCaptions.CLOSE}
      </Link>
    </section>
  );
}
