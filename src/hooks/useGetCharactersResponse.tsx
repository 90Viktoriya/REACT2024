import { useGetCharactersByNameQuery } from '../services/apiRTK';
import { useAppSelector } from './ReduxHooks';

export function useGetCharactersResponse() {
  const searchValue = useAppSelector((state) => state.navigation.searchValue);
  const currentPage = useAppSelector((state) => state.navigation.currentPage);
  const { data } = useGetCharactersByNameQuery({ name: searchValue, page: currentPage });
  return data;
}
