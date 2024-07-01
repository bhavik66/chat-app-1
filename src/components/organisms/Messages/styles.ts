import styled from '@emotion/styled';
import { Box } from '../../atoms';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MessageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.space[4]}px;
  flex: 1;
  justify-content: flex-end;
`;

const MessagesContainerWrapper = styled(Box)`
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
  max-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
`;

const StatusContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${(props) => props.theme.space[2]}px;
`;

const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: ${(props) => props.theme.space[6]}px;
  margin-right: ${(props) => props.theme.space[6]}px;
  margin-bottom: ${(props) => props.theme.space[6]}px;
`;

export {
  Container,
  MessageContainer,
  MessagesContainerWrapper,
  StatusContainer,
  ContentContainer,
};
