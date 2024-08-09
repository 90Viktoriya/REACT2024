import { render } from '@testing-library/react';
import { Pagination } from './Pagination';
import { vi } from 'vitest';

vi.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      page: 0
    }
  })
}));

describe('Given Pagination component', () => {
  it('when rendered, should match snapshot', () => {
    const { asFragment } = render(<Pagination page={undefined} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it('when first page, prev button should be inactive', () => {
    const page = {
      pageNumber: 1,
      pageSize: 1,
      numberOfElements: 1,
      totalElements: 1,
      totalPages: 1,
      firstPage: true,
      lastPage: false
    };
    const screen = render(<Pagination page={page} />);
    const link = screen.queryByText('Prev');

    expect(link?.className).toMatch(/_inactive/);
    expect(link?.className).not.toMatch(/_active/);
  });
  it('when not first page, prev button should be active', () => {
    const page = {
      pageNumber: 1,
      pageSize: 1,
      numberOfElements: 1,
      totalElements: 1,
      totalPages: 1,
      firstPage: false,
      lastPage: false
    };
    const screen = render(<Pagination page={page} />);
    const link = screen.queryByText('Prev');

    expect(link?.className).not.toMatch(/_inactive/);
    expect(link?.className).toMatch(/_active/);
  });
  it('when last page, next button should be inactive', () => {
    const page = {
      pageNumber: 1,
      pageSize: 1,
      numberOfElements: 1,
      totalElements: 1,
      totalPages: 1,
      firstPage: true,
      lastPage: true
    };
    const screen = render(<Pagination page={page} />);
    const link = screen.queryByText('Next');

    expect(link?.className).toMatch(/_inactive/);
    expect(link?.className).not.toMatch(/_active/);
  });
  it('when not last page, next button should be active', () => {
    const page = {
      pageNumber: 1,
      pageSize: 1,
      numberOfElements: 1,
      totalElements: 1,
      totalPages: 1,
      firstPage: true,
      lastPage: false
    };
    const screen = render(<Pagination page={page} />);
    const link = screen.queryByText('Next');

    expect(link?.className).not.toMatch(/_inactive/);
    expect(link?.className).toMatch(/_active/);
  });
});
