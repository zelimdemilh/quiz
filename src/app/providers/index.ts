import { compose } from '@reduxjs/toolkit';

import withAntAppContext from './with-ant-app-context';
import withErrorBoundary from './with-error-boundary';
import withStore from './with-store';
import withAuthentication from './withAuthentication';
import withVitePreloadError from './withVitePreloadError';

const withProviders = compose(
  withVitePreloadError,
  withStore,
  withAntAppContext,
  withErrorBoundary,
  withAuthentication
);

export default withProviders;
