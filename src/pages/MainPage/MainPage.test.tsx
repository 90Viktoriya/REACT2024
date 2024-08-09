import { describe, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import Page from '../../../pages/index';
import { data, details } from '../../data/mockedData';

vi.mock('../../hooks/ReduxHooks', () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: () => vi.fn()
}));

vi.mock('../../components/Loader/Loader', () => ({
  Loader: () => <div>Loader</div>
}));
vi.mock('../../features/Main/Main', () => ({
  Main: () => <div>Main test</div>
}));

vi.mock('next/router', async () => {
  const mod = await vi.importActual('next/router');
  return {
    ...mod,
    useRouter: () => ({
      query: {
        details: 0
      }
    })
  };
});

describe('Given MainPage component', () => {
  it('when data is fetching, loader should be displayed', () => {
    const screen = render(<Page data={null} details={null} />);
    expect(screen.queryByText('Loader')).toBeTruthy();
    expect(screen.queryByText('Main test')).toBeFalsy();
  });
  it('when data is loaded, data should be displayed', () => {
    const screen = render(<Page data={data} details={details} />);
    expect(screen.queryByText('Main test')).toBeTruthy();
    expect(screen.queryByText('Loader')).toBeFalsy();
  });
});
