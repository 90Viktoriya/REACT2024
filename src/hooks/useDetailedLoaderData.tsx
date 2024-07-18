import { useLoaderData } from 'react-router-dom';
import { detailedLoader } from '../features/Router/Loaders/detailedLoader';

export const useDetailedLoaderData = () => {
  return useLoaderData() as Awaited<ReturnType<typeof detailedLoader>>;
};
