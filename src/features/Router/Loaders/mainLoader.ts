import { connection } from '../../../services/api';

export async function mainLoader(searchValue: string, currentPage: number) {
  const response = await connection.getCharacters(searchValue, currentPage);
  return { characters: response?.characters || [], page: response?.page };
}
