import { render } from '@testing-library/react';
import { ErrorPage } from './ErrorPage';

describe('Given List component', () => {
  it('When rendered, should match snapshot', () => {
    const { asFragment } = render(<ErrorPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
