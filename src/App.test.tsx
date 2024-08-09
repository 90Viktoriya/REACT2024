import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../pages/_app';
import { Router } from 'next/router';

describe('Given App component', () => {
  it('when rendered, should render', () => {
    const screen = render(<App Component={() => <div>Test</div>} pageProps={{}} router={{} as Router} />);

    expect(screen.queryByText('Test')).toBeTruthy();
  });
});
