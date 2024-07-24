import { describe, expect, Mock, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Main } from './Main';
import { useNavigation } from 'react-router-dom';
vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useNavigation: vi.fn(),
    useNavigate: vi.fn(),
    useFetcher: vi.fn(),
    useLocation: () => ({ pathname: '/' })
  };
});
vi.mock('../../features/Search/Search', () => ({
  Search: () => <div>Search</div>
}));
vi.mock('../../features/Result/Result', () => ({
  Result: () => <div>Result test</div>
}));
vi.mock('../../components/Loader/Loader', () => ({
  Loader: () => <div>Loader</div>
}));
describe('Given Main component', () => {
  it.skip('when navigation state = "loading", loader should be displayed', () => {
    (useNavigation as Mock).mockReturnValue({
      state: 'loading'
    });
    const searchValue = 'Test Value';
    const screen = render(<Main searchValue={searchValue} />);
    expect(screen.queryByText('Loader')).toBeTruthy();
    expect(screen.queryByText('Result test')).toBeFalsy();
  });
  it.skip('when navigation state not "loading", result should be displayed', () => {
    (useNavigation as Mock).mockReturnValue({
      state: 'idle'
    });
    const searchValue = 'Test Value';
    const screen = render(<Main searchValue={searchValue} />);
    expect(screen.queryByText('Result test')).toBeTruthy();
    expect(screen.queryByText('Loader')).toBeFalsy();
  });
});
