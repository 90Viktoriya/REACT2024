import { describe, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Search } from './Search';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useSubmit: vi.fn(),
    useNavigate: vi.fn(),
    useFetcher: () => ({
      Form: (props: React.RefAttributes<HTMLFormElement>): JSX.Element => <form {...props} />
    }),
    useLocation: () => ({ pathname: '/' })
  };
});

describe('Given Search component', async () => {
  it.skip('when rendered, should match snapshot', () => {
    const searchValue = 'Test Value';
    const { asFragment } = render(<Search searchValue={searchValue} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
