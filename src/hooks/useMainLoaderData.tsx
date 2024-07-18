import { useLoaderData } from 'react-router-dom';
import { mainLoader } from '../features/Router/Loaders/mainLoader';

export const useMainLoaderData = () => {
  return useLoaderData() as Awaited<ReturnType<typeof mainLoader>>;
};
