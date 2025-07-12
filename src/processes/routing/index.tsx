import { FC } from 'react';

import DefaultRouter from './DefaultRouter';
import NoAccessRouter from './NoAccessRouter';

type TRoutingProps = {
  isAuthenticated: boolean;
  hasAccess?: boolean;
};
const Routing: FC<TRoutingProps> = ({ isAuthenticated, hasAccess }) => (
  <>
    {!isAuthenticated && <DefaultRouter />}
    {isAuthenticated && !hasAccess && <NoAccessRouter />}
  </>
);

export default Routing;
