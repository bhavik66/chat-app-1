import styled from '@emotion/styled';
import { Box } from '../../atoms';

const Header = styled(Box)`
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.colors.gainsboro};
`;

export default Header;
