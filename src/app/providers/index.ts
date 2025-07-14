import { compose } from '@reduxjs/toolkit';

import withAntAppContext from './with-ant-app-context';
import withAuthentication from './with-authentication';
import withErrorBoundary from './with-error-boundary';
import withStore from './with-store';
import withVitePreloadError from './with-vite-preloadError';

const withProviders = compose(
  withVitePreloadError,
  withStore,
  withAntAppContext,
  withErrorBoundary,
  withAuthentication
);

export default withProviders;
