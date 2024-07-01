import styled from '@emotion/styled';
import { Box } from '../../atoms';

const SearchInputContainer = styled(Box)`
  display: flex;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.charcoalDark};
  padding: 12px;
  align-items: center;
  margin: 0px 12px;
`;

export { SearchInputContainer };
