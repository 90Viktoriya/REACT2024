import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import { App } from './App';

describe('Given App component', () => {
  it('when rendered, should match snapshot', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
