import { useRoutes } from 'react-router-dom';
import DashboardLayout from '../layouts';
import Commuters from '../pages/Commuters';
import Home from '../pages/Home';

export default function MyWayRouter() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'commuters', element: <Commuters /> }
      ]
    }
  ]);
}
