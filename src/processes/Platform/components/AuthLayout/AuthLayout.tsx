import { ReactElement } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { authRouteObjects } from '../../../routing/authRouteObjects';

const router = createBrowserRouter(authRouteObjects);

export const AuthLayout = (): ReactElement => <RouterProvider router={router} />;
