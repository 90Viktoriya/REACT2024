import { describe, expect, Mock, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Main } from './Main';
import { useLocation } from 'react-router-dom';
import { RouterPath } from '../Router/Router.enum';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    Outlet: () => <div>Outlet</div>,
    useNavigate: vi.fn(),
    useLocation: vi.fn()
  };
});
vi.mock('../../features/Search/Search', () => ({
  Search: () => <div>Search</div>
}));
vi.mock('../../features/Result/Result', () => ({
  Result: () => <div>Result test</div>
}));

describe('Given Main component', () => {
  it('when render, should contain relevant data', () => {
    (useLocation as Mock).mockReturnValue({
      pathname: '/'
    });
    const screen = render(<Main />);
    expect(screen.queryByText('Result test')).toBeTruthy();
    expect(screen.queryByText('Outlet')).toBeFalsy();
  });
  it('when details is opened, outlet should be render', () => {
    (useLocation as Mock).mockReturnValue({
      pathname: `/${RouterPath.DETAILS}/1`
    });
    const screen = render(<Main />);
    expect(screen.queryByText('Outlet')).toBeTruthy();
  });
});
