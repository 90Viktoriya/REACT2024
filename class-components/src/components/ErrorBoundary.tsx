import React, { Component, ErrorInfo, PropsWithChildren } from 'react';

export class ErrorBoundary extends Component<PropsWithChildren<{ fallback: React.ReactNode }>, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(`${error}: ${errorInfo.componentStack}`);
  }

  render() {
    const {
      props: { fallback, children },
      state: { hasError }
    } = this;

    if (hasError) {
      return fallback;
    }
    return children;
  }
}
