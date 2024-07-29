import { describe, expect, Mock, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from './Search';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { MemoryRouter } from 'react-router-dom';

const mockedFunction = vi.fn();

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useNavigate: () => mockedFunction,
    useLocation: () => ({ pathname: '/details/123' })
  };
});

vi.mock('../../hooks/ReduxHooks', () => ({
  useAppDispatch: () => vi.fn()
}));

vi.mock('../../hooks/useLocalStorage', () => ({
  useLocalStorage: vi.fn()
}));

describe('Given Search component', async () => {
  it('when rendered, should match snapshot', () => {
    (useLocalStorage as Mock).mockReturnValue({
      searchValue: 'search'
    });
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('When click button search, searchValue should changed', () => {
    const setValue = vi.fn();
    (useLocalStorage as Mock).mockReturnValue({
      searchValue: 'search',
      setValue
    });
    const screen = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    const button = screen.queryByText(ComponentsCaptions.SEARCH) as HTMLElement;
    fireEvent.click(button);
    expect(setValue).toBeCalled();
    expect(mockedFunction).toBeCalled();
  });
  it('When click on input, details should be closed', () => {
    const setValue = vi.fn();
    (useLocalStorage as Mock).mockReturnValue({
      searchValue: 'search',
      setValue
    });
    const screen = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    const input = screen.queryByRole('textbox') as HTMLElement;
    fireEvent.click(input);
    expect(mockedFunction).toBeCalled();
  });
  it('When input value changing, it should be changed', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    const input = screen.queryByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(input.value).toBe('New Value');
  });
});
