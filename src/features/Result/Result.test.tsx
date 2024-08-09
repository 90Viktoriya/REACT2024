import { describe, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Result } from './Result';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { data, page } from '../../data/mockedData';

vi.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      page: 0
    }
  })
}));
vi.mock('../Selector/Selector', () => ({
  Selector: () => <div>Selector</div>
}));
vi.mock('../Pagination/Pagination', () => ({
  Pagination: () => <div>Pagination</div>
}));
describe('Given Result component', () => {
  it('when list of character empty, should render appropriate message ', () => {
    const screen = render(<Result data={{ characters: [], page: page }} />);
    expect(screen.queryByText(ComponentsCaptions.NOTHING_FOUND)).toBeTruthy();
  });

  it('when list of character not empty, should display data', () => {
    const screen = render(<Result data={data} />);

    expect(screen.queryByText('Character1')).toBeTruthy();
  });
});
