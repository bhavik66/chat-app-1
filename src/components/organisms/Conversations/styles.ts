import styled from '@emotion/styled';
import { Box } from '../../atoms';

const Container = styled(Box)`
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${(props) => props.theme.colors.gainsboro};
  display: flex;
  flex-direction: column;
`;

const ConversationContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  height: calc(
    100% - ${(props) => props.theme.space[4]}px -
      ${(props) => props.theme.space[4]}px
  );
  padding: ${(props) => props.theme.space[4]}px;
  flex: 1;
`;

const UserContainer = styled(Box)`
  max-height: calc(100vh - 145px);
  overflow-y: scroll;
  scrollbar-width: none;
`;

export { Container, ConversationContainer, UserContainer };
