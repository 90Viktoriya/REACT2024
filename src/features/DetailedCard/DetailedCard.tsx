import { Link, useNavigation } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import styles from './DetailedCard.module.css';
import { NavigationState } from '../Router/Router.enum';
import { FieldCaptions } from '../../data/FieldCaptions';
import { useDetailedLoaderData } from '../../hooks/useDetailedLoaderData';
import { DetailsBlock } from './DetailsBlock/DetailsBlock';

export function DetailedCard() {
  const character = useDetailedLoaderData();
  const navigation = useNavigation();
  if (navigation.state === NavigationState.LOADING) {
    return (
      <section className={styles.details}>
        <Loader />
      </section>
    );
  }
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
      <Link to=".." className={styles.close}>
        {ComponentsCaptions.CLOSE}
      </Link>
    </section>
  );
}
