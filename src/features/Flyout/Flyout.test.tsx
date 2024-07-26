import { render } from '@testing-library/react';
import { vi, Mock } from 'vitest';
import { Flyout } from './Flyout';
import { useAppSelector } from '../../hooks/ReduxHooks';

vi.mock('../../hooks/ReduxHooks', () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn()
}));

describe('Given Flyout component', () => {
  it('when render, should contain relevant data', () => {
    (useAppSelector as Mock).mockReturnValue(135);
    const screen = render(<Flyout />);
    expect(screen.queryByText('135')).toBeTruthy();
    expect(screen.queryByText('136')).toBeFalsy();
  });
});
