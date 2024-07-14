import { describe, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { DetailedCard } from './DetailedCard';
import { MemoryRouter, useLoaderData } from 'react-router-dom';

beforeEach(() => {
  vi.clearAllMocks();
});
const mockedNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useNavigation: () => ({
      navigation: mockedNavigate,
      state: 'idle'
    }),
    useLoaderData: vi.fn()
  };
});

describe('Given DetailedCard component', () => {
  it('when rendered, should contain relevant data', () => {
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
    const screen = render(
      <MemoryRouter>
        <DetailedCard />
      </MemoryRouter>
    );
    expect(screen.findByText('Detailed card test')).toBeTruthy();
  });
});
