import { NavLink } from 'react-router-dom';
import { Home, MessageCircle, User, Search, Calendar } from 'react-feather';
import Box from '../../atoms/Box';
import Avatar from '../../atoms/Avatar';
import { IconWrapper, SidebarContainer } from './styles';
import { ROUTES } from '../../../constant'; // Ensure you have your routes defined here

const Sidebar = () => {
  const activeColor = '#5f63ef';
  const inactiveColor = '#fff';

  return (
    <SidebarContainer>
      <Box mb={5}>
        <Avatar
          src="https://eu.ui-avatars.com/api/?name=Q&size=46&background=5f63ef&color=fff"
          alt="Avatar"
          width={46}
        />
      </Box>
      <NavLink to={ROUTES.HOME}>
        {({ isActive }) => (
          <IconWrapper>
            <Home
              fill={isActive ? activeColor : inactiveColor}
              size={24}
              color={isActive ? undefined : 'black'}
            />
          </IconWrapper>
        )}
      </NavLink>
      <NavLink to={ROUTES.CHAT}>
        {({ isActive }) => (
          <IconWrapper>
            <MessageCircle
              fill={isActive ? activeColor : inactiveColor}
              size={24}
              color={isActive ? undefined : 'black'}
            />
          </IconWrapper>
        )}
      </NavLink>
      <NavLink to={ROUTES.PROFILE}>
        {({ isActive }) => (
          <IconWrapper>
            <User
              fill={isActive ? activeColor : inactiveColor}
              size={24}
              color={isActive ? undefined : 'black'}
            />
          </IconWrapper>
        )}
      </NavLink>
      <NavLink to={ROUTES.SEARCH}>
        {({ isActive }) => (
          <IconWrapper>
            <Search
              fill={isActive ? activeColor : inactiveColor}
              size={24}
              color={isActive ? undefined : 'black'}
            />
          </IconWrapper>
        )}
      </NavLink>
      <NavLink to={ROUTES.CALENDER}>
        {({ isActive }) => (
          <IconWrapper>
            <Calendar
              fill={isActive ? activeColor : inactiveColor}
              size={24}
              color={isActive ? undefined : 'black'}
            />
          </IconWrapper>
        )}
      </NavLink>
    </SidebarContainer>
  );
};

export default Sidebar;
