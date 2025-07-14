import { Layout } from 'antd/es';
import { ReactElement, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Loader } from '@shared/ui';

import Routing from '../../../routing';

export const NoAccessLayout = (): ReactElement => (
  <BrowserRouter>
    <Layout className="layout bg-transparent">
      <Layout className="bg-transparent">
        <Suspense fallback={<Loader />}>
          <Routing hasAccess={false} isAuthenticated />
        </Suspense>
      </Layout>
    </Layout>
  </BrowserRouter>
);
