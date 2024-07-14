import { describe, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Main } from './Main';
beforeEach(() => {
  vi.clearAllMocks();
});
describe('Given Main component', () => {
  it('when navigation state not "loading", result should be displayed', () => {
    vi.mock('react-router-dom', async () => {
      const mod = await vi.importActual('react-router-dom');
      return {
        ...mod,
        useNavigation: () => ({
          navigation: vi.fn(),
          state: 'idle'
        }),
        useNavigate: vi.fn(),
        useFetcher: vi.fn(),
        useLocation: () => ({ pathname: '/' })
      };
    });
    vi.mock('../../features/Search/Search', () => ({
      Search: () => <div>Search</div>
    }));
    vi.mock('../../features/Result/Result', () => ({
      Result: () => <div>Result</div>
    }));
    const searchValue = 'Test Value';
    const screen = render(<Main searchValue={searchValue} />);
    expect(screen.findByText('Result')).toBeTruthy();
  });
});
