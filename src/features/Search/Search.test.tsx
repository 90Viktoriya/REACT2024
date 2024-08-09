import { describe, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from './Search';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';

const mockedFunction = vi.fn();

vi.mock('next/router', async () => {
  const mod = await vi.importActual('next/router');
  return {
    ...mod,
    useRouter: () => ({
      query: {
        details: 'jhj'
      },
      push: mockedFunction
    })
  };
});

vi.mock('../../hooks/ReduxHooks', () => ({
  useAppDispatch: () => vi.fn()
}));

describe('Given Search component', async () => {
  it('when rendered, should match snapshot', () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('When click button search, should redirect', () => {
    const screen = render(<Search />);

    const button = screen.queryByText(ComponentsCaptions.SEARCH) as HTMLElement;
    fireEvent.click(button);
    expect(mockedFunction).toBeCalled();
  });

  it('When input value changing, it should be changed', () => {
    render(<Search />);

    const input = screen.queryByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(input.value).toBe('New Value');
  });
});
