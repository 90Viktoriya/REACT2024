import { render } from '@testing-library/react';
import ErrorPage from '../../../pages/404';

describe('Given List component', () => {
  it('When rendered, should match snapshot', () => {
    const { asFragment } = render(<ErrorPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
