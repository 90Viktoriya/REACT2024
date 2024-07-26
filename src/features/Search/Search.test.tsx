import { describe, expect, Mock, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Search } from './Search';
import { useLocalStorage } from '../../hooks/useLocalStorage';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useNavigate: vi.fn(),
    useLocation: () => ({ pathname: '/' })
  };
});

vi.mock('../../hooks/ReduxHooks', () => ({
  useAppDispatch: vi.fn()
}));

vi.mock('../../hooks/useLocalStorage', () => ({
  useLocalStorage: vi.fn()
}));

describe('Given Search component', async () => {
  it('when rendered, should match snapshot', () => {
    (useLocalStorage as Mock).mockReturnValue({
      searchValue: 'search'
    });
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });
});
