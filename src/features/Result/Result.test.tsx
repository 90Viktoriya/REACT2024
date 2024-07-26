import { describe, expect, Mock, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Result } from './Result';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { MemoryRouter } from 'react-router-dom';
import { useGetCharactersResponse } from '../../hooks/useGetCharactersResponse';

vi.mock('../../hooks/useGetCharactersResponse', () => ({
  useGetCharactersResponse: vi.fn()
}));
vi.mock('../Selector/Selector', () => ({
  Selector: () => <div>Selector</div>
}));
vi.mock('../Pagination/Pagination', () => ({
  Pagination: () => <div>Pagination</div>
}));
describe('Given Result component', () => {
  it('when list of character empty, should render appropriate message ', () => {
    (useGetCharactersResponse as Mock).mockReturnValue({ characters: [], page: 0 });
    const screen = render(<Result />);
    expect(screen.findByText(ComponentsCaptions.NOTHING_FOUND)).toBeTruthy();
  });

  it('when list of character not empty, should display data', () => {
    (useGetCharactersResponse as Mock).mockReturnValue({
      characters: [{ uid: 'test', name: 'Result test', gender: '', yearOfBirth: null }],
      page: 0
    });
    const screen = render(
      <MemoryRouter>
        <Result />
      </MemoryRouter>
    );
    expect(screen.findByText('Result test')).toBeTruthy();
  });
});
