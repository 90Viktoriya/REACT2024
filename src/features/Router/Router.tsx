import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from '../../pages/Main/Main';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { DetailedCard } from '../DetailedCard/DetailedCard';
import { mainLoader } from './Loaders/mainLoader';
import { detailedLoader } from './Loaders/detailedLoader';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { search } from './Actions/search';

export function Router() {
  const { searchValue, setSearchValue } = useLocalStorage();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main searchValue={searchValue} />,
      errorElement: <ErrorPage />,
      loader: async () => mainLoader(searchValue, 0),
      action: async ({ request }) => search({ request }, setSearchValue),
      children: [
        {
          path: 'details/:uid',
          element: <DetailedCard />,
          loader: detailedLoader
        }
      ]
    },
    {
      path: 'page/:page',
      element: <Main searchValue={searchValue} />,
      loader: async ({ params }) => mainLoader(searchValue, Number.parseInt(params.page ?? '0')),
      children: [
        {
          path: 'details/:uid',
          element: <DetailedCard />,
          loader: detailedLoader
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}
