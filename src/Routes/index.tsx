import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Calender, Chat, Home, Profile, Search } from '../components/pages';
import { Dashboard } from '../components';
import { ROUTES } from '../constant';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CHAT} element={<Chat />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.SEARCH} element={<Search />} />
          <Route path={ROUTES.CALENDER} element={<Calender />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
