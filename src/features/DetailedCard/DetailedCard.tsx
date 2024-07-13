import { useLoaderData, useNavigation } from 'react-router-dom';
import { Character } from '../../services/api.types';
import { Loader } from '../../components/Loader';

export function DetailedCard() {
  const character = useLoaderData() as Character;
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <Loader />;
  }
  return (
    <>
      <div>It's detailed card</div>
      {character && <div>{character.uid}</div>}
    </>
  );
}
