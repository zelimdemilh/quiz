import { Layout } from 'antd/es';
import { ReactElement, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routing from '../../../routing';
import { Loader } from '@shared/ui';

export const NoAuthLayout = (): ReactElement => (
  <BrowserRouter>
    <Layout className="layout bg-transparent">
      <Layout className="bg-transparent">
        <Suspense fallback={<Loader />}>
          <Routing isAuthenticated={false} />
        </Suspense>
      </Layout>
    </Layout>
  </BrowserRouter>
);
