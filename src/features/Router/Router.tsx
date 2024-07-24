import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from '../../pages/Main/Main';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { DetailedCard } from '../DetailedCard/DetailedCard';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { RouterParams, RouterPath } from './Router.enum';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/ReduxHooks';
import { setSearchValue as setSearchValueAction } from '../slices/navigation/navigationSlice';

export function Router() {
  const { searchValue } = useLocalStorage();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setSearchValueAction(searchValue));
  }, [dispatch, searchValue]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: `${RouterPath.DETAILS}/:${RouterParams.UID}`,
          element: <DetailedCard />
        }
      ]
    },
    {
      path: `${RouterPath.PAGE}/:${RouterParams.PAGE}`,
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: `${RouterPath.DETAILS}/:${RouterParams.UID}`,
          element: <DetailedCard />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}
