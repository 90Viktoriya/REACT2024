import { render } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';
import { vi } from 'vitest';

console.error = vi.fn();
describe('Given ErrorBoundary  component', () => {
  it('when error in render, should show fallback component', () => {
    const Children = () => {
      throw new Error('This error just for testing');
    };

    const screen = render(
      <ErrorBoundary fallback={<h1>Hello</h1>}>
        <Children />
      </ErrorBoundary>
    );

    expect(screen.queryByText('Hello')).toBeTruthy();
  });
});
