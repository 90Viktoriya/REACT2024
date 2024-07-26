import { describe, expect, Mock, vi } from 'vitest';
import { render } from '@testing-library/react';
import { DetailedCard } from './DetailedCard';
import { MemoryRouter } from 'react-router-dom';
import { useGetCharacterByUidQuery } from '../../services/apiRTK';

vi.mock('../../services/apiRTK', () => ({
  useGetCharacterByUidQuery: vi.fn()
}));
vi.mock('../../components/Loader/Loader', () => ({
  Loader: () => <div>Loader</div>
}));

describe('Given DetailedCard component', () => {
  it('when data is fetching, loader should be displayed', async () => {
    (useGetCharacterByUidQuery as Mock).mockReturnValue({
      isFetching: true
    });
    const screen = render(<DetailedCard />);
    expect(screen.queryByText('Loader')).toBeTruthy();
  });
  it('when rendered, should contain relevant data', () => {
    (useGetCharacterByUidQuery as Mock).mockReturnValue({
      isFetching: false,
      data: {
        character: {
          uid: 'test12',
          name: 'Detailed card test',
          gender: '',
          yearOfBirth: 0,
          placeOfBirth: 'test',
          yearOfDeath: 0,
          performers: [{ uid: 'qwe', dateOfBirth: 2024 }],
          episodes: [{ uid: 'asd' }],
          movies: [{ uid: 'zxc' }]
        }
      }
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
