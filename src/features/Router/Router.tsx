import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { DetailedCard } from '../DetailedCard/DetailedCard';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { RouterParams, RouterPath } from './Router.enum';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/ReduxHooks';
import { setSearchValue } from '../slices/navigation/navigationSlice';

export function Router() {
  const { searchValue } = useLocalStorage();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setSearchValue(searchValue));
  }, [dispatch, searchValue]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
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
      element: <MainPage />,
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
