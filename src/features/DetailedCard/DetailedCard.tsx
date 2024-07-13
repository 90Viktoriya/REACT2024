import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { Character } from '../../services/api.types';
import { Loader } from '../../components/Loader';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import styles from './DetailedCard.module.css';

export function DetailedCard() {
  const character = useLoaderData() as Character;
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return (
      <section className={styles.details}>
        <Loader />
      </section>
    );
  }
  return (
    <section className={styles.details}>
      <div>It's detailed card</div>
      {character && <div>{character.uid}</div>}
      <Link to=".." className={styles.close}>
        {ComponentsCaptions.CLOSE}
      </Link>
    </section>
  );
}
