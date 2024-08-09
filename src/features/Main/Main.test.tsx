import { describe, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Main } from './Main';
import { data, details } from '../../data/mockedData';

vi.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      details: 0
    }
  })
}));
vi.mock('../../features/Search/Search', () => ({
  Search: () => <div>Search</div>
}));
vi.mock('../../features/Result/Result', () => ({
  Result: () => <div>Result test</div>
}));
vi.mock('../DetailedCard/DetailedCard', () => ({
  DetailedCard: () => <div>Detailed</div>
}));

describe('Given Main component', () => {
  it('when render, should contain relevant data', () => {
    const screen = render(<Main data={data} details={null} />);
    expect(screen.queryByText('Result test')).toBeTruthy();
    expect(screen.queryByText('Detailed')).toBeFalsy();
  });
  it('when details is opened, outlet should be render', () => {
    const screen = render(<Main data={data} details={details} />);
    expect(screen.queryByText('Detailed')).toBeTruthy();
  });
});
