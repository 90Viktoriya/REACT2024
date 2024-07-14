import { createBrowserRouter, Params, RouterProvider } from 'react-router-dom';
import { Main } from '../../pages/Main/Main';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { DetailedCard } from '../DetailedCard/DetailedCard';
import { mainLoader } from './Loaders/mainLoader';
import { detailedLoader } from './Loaders/detailedLoader';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { search } from './Actions/search';
import { RouterParams, RouterPath } from './Router.enum';
import { useCallback } from 'react';

export function Router() {
  const { searchValue, setSearchValue } = useLocalStorage();

  const rootLoader = useCallback(async () => mainLoader(searchValue, 0), [searchValue]);
  const pageLoader = useCallback(
    async ({ params }: { params: Params<RouterParams.PAGE> }) =>
      mainLoader(searchValue, Number.parseInt(params.page ?? '0')),
    [searchValue]
  );
  const searchAction = useCallback(
    async ({ request }: { request: Request }) => search({ request }, setSearchValue),
    [setSearchValue]
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main searchValue={searchValue} />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      action: searchAction,
      children: [
        {
          path: `${RouterPath.DETAILS}/:${RouterParams.UID}`,
          element: <DetailedCard />,
          loader: detailedLoader
        }
      ]
    },
    {
      path: `${RouterPath.PAGE}/:${RouterParams.PAGE}`,
      element: <Main searchValue={searchValue} />,
      loader: pageLoader,
      action: searchAction,
      errorElement: <ErrorPage />,
      children: [
        {
          path: `${RouterPath.DETAILS}/:${RouterParams.UID}`,
          element: <DetailedCard />,
          loader: detailedLoader
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}
