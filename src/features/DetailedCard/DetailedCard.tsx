import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { Character } from '../../services/api.types';
import { Loader } from '../../components/Loader';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import styles from './DetailedCard.module.css';
import { NavigationState } from '../Router/Router.enum';
import { FieldCaptions } from '../../data/FieldCaptions';

export function DetailedCard() {
  const character = useLoaderData() as Character;
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
      <h2>{character.name}</h2>
      <div className={styles.description}>
        <p>
          {FieldCaptions.GENDER}
          {character.gender ?? ComponentsCaptions.UNKNOWN_VALUE}
        </p>
        <p>
          {FieldCaptions.YEAR_OF_BIRTH}
          {character.yearOfBirth ?? ComponentsCaptions.UNKNOWN_VALUE}
        </p>
        <p>
          {FieldCaptions.YEAR_OF_DEATH}
          {character.yearOfDeath ?? ComponentsCaptions.UNKNOWN_VALUE}
        </p>
        <div>
          <h3>{FieldCaptions.MOVIES}</h3>
          {character.movies.map((movie) => (
            <div className={styles.block} key={movie.uid}>
              <p>
                {FieldCaptions.TITLE}
                {movie.title ?? ComponentsCaptions.UNKNOWN_VALUE}
              </p>
              <p>
                {FieldCaptions.RELEASE_DATE}
                {movie.usReleaseDate ?? ComponentsCaptions.UNKNOWN_VALUE}
              </p>
            </div>
          ))}
        </div>
        <div>
          <h3>{FieldCaptions.EPISODES}</h3>
          {character.episodes.map((episode) => (
            <div className={styles.block} key={episode.uid}>
              <p>
                {FieldCaptions.TITLE}
                {episode.title ?? ComponentsCaptions.UNKNOWN_VALUE}
              </p>
              <p>
                {FieldCaptions.EPISODE_NUMBER}
                {episode.episodeNumber ?? ComponentsCaptions.UNKNOWN_VALUE}
              </p>
            </div>
          ))}
        </div>
        <div>
          <h3>{FieldCaptions.PERFORMERS}</h3>
          {character.performers.map((performer) => (
            <div className={styles.block} key={performer.uid}>
              <p>
                {FieldCaptions.NAME}
                {performer.name ?? ComponentsCaptions.UNKNOWN_VALUE}
              </p>
              <p>
                {FieldCaptions.DATE_OF_BIRTH}
                {performer.dateOfBirth ?? ComponentsCaptions.UNKNOWN_VALUE}
              </p>
              <p>
                {FieldCaptions.PLACE_OF_BIRTH}
                {performer.placeOfBirth ?? ComponentsCaptions.UNKNOWN_VALUE}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Link to=".." className={styles.close}>
        {ComponentsCaptions.CLOSE}
      </Link>
    </section>
  );
}
