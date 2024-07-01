import styled from '@emotion/styled';
import { Box } from '../../atoms';

const SidebarContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - ${(props) => props.theme.space[5]}px);
  width: 80px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: 99;
  padding-top: ${(props) => props.theme.space[5]}px;
`;

const IconWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46px;
  padding-top: ${(props) => props.theme.space[3]}px;
  padding-bottom: ${(props) => props.theme.space[3]}px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 8px;
  }
`;

export { SidebarContainer, IconWrapper };
