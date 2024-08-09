import { describe, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { DetailedCard } from './DetailedCard';
import { details } from '../../data/mockedData';

vi.mock('next/router', async () => {
  const mod = await vi.importActual('next/router');
  return {
    ...mod,
    useRouter: () => ({
      query: {
        details: 'jhj'
      }
    })
  };
});
vi.mock('../../components/Loader/Loader', () => ({
  Loader: () => <div>Loader</div>
}));

describe('Given DetailedCard component', () => {
  it('when rendered, should contain relevant data', () => {
    const screen = render(<DetailedCard details={details} />);
    expect(screen.queryByText('Detailed card test')).toBeTruthy();
    expect(screen.queryByText('Loader')).toBeFalsy();
  });
});
