import { Params } from 'react-router-dom';
import { connection } from '../../../services/api';
import { RouterParams } from '../Router.enum';

export async function detailedLoader({ params }: { params: Params<RouterParams.UID> }) {
  const character = await connection.getCharacter(params.uid);
  return character;
}
