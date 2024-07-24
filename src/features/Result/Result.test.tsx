import { describe, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Result } from './Result';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { MemoryRouter, useLoaderData } from 'react-router-dom';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useLoaderData: vi.fn()
  };
});

describe('Given Result component', () => {
  it.skip('when rendered, should match snapshot', () => {
    vi.mocked(useLoaderData).mockReturnValue({ characters: [], page: 0 });
    const { asFragment } = render(<Result />);

    expect(asFragment()).toMatchSnapshot();
  });

  it.skip('when list of character not empty, should display data', () => {
    vi.mocked(useLoaderData).mockReturnValue({
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

  it.skip('when list of character empty, should render appropriate message ', () => {
    vi.mocked(useLoaderData).mockReturnValue({ characters: [], page: 0 });
    const screen = render(<Result />);
    expect(screen.findByText(ComponentsCaptions.NOTHING_FOUND)).toBeTruthy();
  });
});
