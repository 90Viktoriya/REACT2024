import { describe, expect, Mock, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MainPage } from './MainPage';
import { useGetCharactersByNameQuery } from '../../services/apiRTK';

vi.mock('../../hooks/ReduxHooks', () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: () => vi.fn()
}));
vi.mock('../../services/apiRTK', () => ({
  useGetCharactersByNameQuery: vi.fn()
}));
vi.mock('../../components/Loader/Loader', () => ({
  Loader: () => <div>Loader</div>
}));
vi.mock('../../features/Main/Main', () => ({
  Main: () => <div>Main test</div>
}));

describe('Given MainPage component', () => {
  it('when data is fetching, loader should be displayed', () => {
    (useGetCharactersByNameQuery as Mock).mockReturnValue({
      isFetching: true
    });
    const screen = render(<MainPage />);
    expect(screen.queryByText('Loader')).toBeTruthy();
    expect(screen.queryByText('Main test')).toBeFalsy();
  });
  it('when data is fetching, loader should be displayed', () => {
    (useGetCharactersByNameQuery as Mock).mockReturnValue({
      isFetching: false
    });
    const screen = render(<MainPage />);
    expect(screen.queryByText('Main test')).toBeTruthy();
    expect(screen.queryByText('Loader')).toBeFalsy();
  });
});
