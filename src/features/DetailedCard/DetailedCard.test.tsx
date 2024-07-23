import { describe, expect, Mock, vi } from 'vitest';
import { render } from '@testing-library/react';
import { DetailedCard } from './DetailedCard';
import { MemoryRouter, useLoaderData, useNavigation } from 'react-router-dom';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useNavigation: vi.fn(),
    useLoaderData: vi.fn()
  };
});
vi.mocked(useLoaderData).mockReturnValue({
  uid: 'test',
  name: 'Detailed card test',
  gender: '',
  yearOfBirth: 0,
  placeOfBirth: 'test',
  yearOfDeath: 0,
  performers: [{}],
  episodes: [{}],
  movies: [{}]
});
vi.mock('../../components/Loader/Loader', () => ({
  Loader: () => <div>Loader</div>
}));
describe('Given DetailedCard component', () => {
  it('when navigation state = "loading", loader should be displayed', async () => {
    (useNavigation as Mock).mockReturnValue({
      state: 'loading'
    });
    const screen = render(
      <MemoryRouter>
        <DetailedCard />
      </MemoryRouter>
    );
    expect(screen.queryByText('Loader')).toBeTruthy();
    expect(screen.queryByText('Detailed card test')).toBeFalsy();
  });
  it('when rendered, should contain relevant data', () => {
    (useNavigation as Mock).mockReturnValue({
      state: 'idle'
    });
    const screen = render(
      <MemoryRouter>
        <DetailedCard />
      </MemoryRouter>
    );
    expect(screen.queryByText('Detailed card test')).toBeTruthy();
    expect(screen.queryByText('Loader')).toBeFalsy();
  });
});
