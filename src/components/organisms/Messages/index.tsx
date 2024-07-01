import { Box, Button, Text } from '../../atoms';
import Message from '../../molecules/Message';
import SendMsg from '../../molecules/SendMsg';
import Header from '../../molecules/Header';
import Avatar from '../../atoms/Avatar';
import { Phone } from 'react-feather';
import StatusDot from '../../atoms/StatusDot';

import Alert from '../../atoms/Alert';
import { Message as MessageType } from '../../../types/chat';
import { useTranslation } from 'react-i18next';
import {
  Container,
  ContentContainer,
  MessageContainer,
  MessagesContainerWrapper,
  StatusContainer,
} from './styles';
import { AVATAR_URL } from '../../../constant';

export interface MessagesProps {
  name: string;
  loading: boolean;
  error: string | null;
  messages: MessageType[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
  editMessage: MessageType | null;
  handleEdit: (message: MessageType) => void;
  handleDelete: (message: MessageType) => void;
  handleSendMessage: (text: string) => void;
}

const Messages: React.FC<MessagesProps> = ({
  name,
  loading,
  error,
  messages,
  messagesEndRef,
  editMessage,
  handleEdit,
  handleDelete,
  handleSendMessage,
}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header p={[5]} pl={[6]} justifyContent="space-between">
        <Box display={'flex'} flexDirection={'row'}>
          <Avatar src={AVATAR_URL + 'Elmer Laverty'} width={46} height={46} />
          <Box ml={4}>
            <Text fontWeight="bold" fontSize={20}>
              {'Elmer Laverty'}
            </Text>
            <StatusContainer>
              <StatusDot online={true} />
              <Text color="charcoalDark" fontSize={14} ml={2}>
                {t('chat.online')}
              </Text>
            </StatusContainer>
          </Box>
        </Box>
        <Box>
          <Button
            bg="lavenderBlue"
            color={'slateBlue'}
            px={4}
            fontSize={14}
            // onClick={handleChangeLanguage}
          >
            <Phone color="#6669D9" size={18} style={{ marginRight: 12 }} />
            {t('chat.call')}
          </Button>
        </Box>
      </Header>
      <ContentContainer>
        <MessagesContainerWrapper>
          <MessageContainer>
            {error && (
              <Box>
                <Alert variant="error">{error}</Alert>
              </Box>
            )}
            {loading && messages.length < 1 ? (
              <Alert variant="info">Loading...</Alert>
            ) : (
              messages?.map((message, index) => (
                <Message
                  key={message.id}
                  message={message}
                  isContinueMsg={
                    index === 0
                      ? false
                      : messages[index - 1].name === message.name
                  }
                  isSelf={message.name === name}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))
            )}
            <div ref={messagesEndRef} />
          </MessageContainer>
        </MessagesContainerWrapper>
        <Box>
          <SendMsg
            editMessage={editMessage}
            handleSendMessage={handleSendMessage}
          />
        </Box>
      </ContentContainer>
    </Container>
  );
};

export default Messages;
