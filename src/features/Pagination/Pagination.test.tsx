import { render } from '@testing-library/react';
import { Pagination } from './Pagination';
import { Mock, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { useGetCharactersResponse } from '../../hooks/useGetCharactersResponse';

vi.mock('../../hooks/useGetCharactersResponse', () => ({
  useGetCharactersResponse: vi.fn()
}));
vi.mock('../../hooks/ReduxHooks', () => ({
  useAppSelector: vi.fn()
}));

describe('Given Pagination component', () => {
  it('when rendered, should match snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it('when first page, prev button should be inactive', () => {
    (useGetCharactersResponse as Mock).mockReturnValue({ page: { firstPage: true, lastPage: false } });
    const screen = render(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    );
    const link = screen.queryByText('Prev');

    expect(link?.className).toMatch(/_inactive/);
    expect(link?.className).not.toMatch(/_active/);
  });
  it('when not first page, prev button should be active', () => {
    (useGetCharactersResponse as Mock).mockReturnValue({ page: { firstPage: false, lastPage: false } });
    const screen = render(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    );
    const link = screen.queryByText('Prev');

    expect(link?.className).not.toMatch(/_inactive/);
    expect(link?.className).toMatch(/_active/);
  });
  it('when last page, next button should be inactive', () => {
    (useGetCharactersResponse as Mock).mockReturnValue({ page: { firstPage: false, lastPage: true } });
    const screen = render(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    );
    const link = screen.queryByText('Next');

    expect(link?.className).toMatch(/_inactive/);
    expect(link?.className).not.toMatch(/_active/);
  });
  it('when not last page, next button should be active', () => {
    (useGetCharactersResponse as Mock).mockReturnValue({ page: { firstPage: false, lastPage: false } });
    const screen = render(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    );
    const link = screen.queryByText('Next');

    expect(link?.className).not.toMatch(/_inactive/);
    expect(link?.className).toMatch(/_active/);
  });
});
