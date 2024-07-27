import { render } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';
import { vi } from 'vitest';

describe('Given ErrorBoundary  component', () => {
  it('when error in render, should show fallback component', () => {
    const Children = () => {
      throw new Error('This error just for testing');
    };

    vi.spyOn(console, 'error').mockImplementation(() => null);
    const screen = render(
      <ErrorBoundary fallback={<h1>Hello</h1>}>
        <Children />
      </ErrorBoundary>
    );

    expect(screen.queryByText('Hello')).toBeTruthy();
  });
});
