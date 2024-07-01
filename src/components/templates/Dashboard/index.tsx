import { Outlet } from 'react-router-dom';
import { Box } from '../../atoms';
import Sidebar from '../../organisms/Sidebar';

const Dashboard = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Outlet />
    </Box>
  );
};

export default Dashboard;
