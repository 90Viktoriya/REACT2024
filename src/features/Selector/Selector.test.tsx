import { render } from '@testing-library/react';
import { Selector } from './Selector';
import { Mock, vi } from 'vitest';
import { useAppSelector } from '../../hooks/ReduxHooks';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useLocation: () => ({ pathname: '/' })
  };
});
vi.mock('../../hooks/ReduxHooks', () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn()
}));

vi.mock('../../hooks/useGetCharactersResponse', () => ({
  useGetCharactersResponse: vi.fn()
}));

describe('Given Selector component', () => {
  it('when item in store, should display checked input', () => {
    (useAppSelector as Mock).mockReturnValue([{ uid: 'test' }, { uid: 'fff' }]);
    const screen = render(<Selector uid="test" />);
    expect(screen.queryByRole('checkbox', { checked: true })).toBeTruthy();
    expect(screen.queryByRole('checkbox', { checked: false })).toBeFalsy();
  });
  it('when item not in store, should display unchecked input', () => {
    (useAppSelector as Mock).mockReturnValue([{ uid: 'aaa' }, { uid: 'fff' }]);
    const screen = render(<Selector uid="test" />);
    expect(screen.queryByRole('checkbox', { checked: false })).toBeTruthy();
    expect(screen.queryByRole('checkbox', { checked: true })).toBeFalsy();
  });
});
