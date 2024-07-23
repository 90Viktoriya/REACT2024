import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Given Loader component', () => {
  it('when rendered, should match snapshot', () => {
    const { asFragment } = render(<Loader />);

    expect(asFragment()).toMatchSnapshot();
  });
});
