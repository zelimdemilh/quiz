import React, { ErrorInfo, ReactNode } from 'react';

import { NotFound } from '@pages/NotFound';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <NotFound />;
    }

    return children;
  }
}

const withErrorBoundary = (component: () => React.ReactNode) =>
  function withErrorBoundaryProvider() {
    return <ErrorBoundary>{component()}</ErrorBoundary>;
  };

export default withErrorBoundary;
