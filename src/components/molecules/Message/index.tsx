import React from 'react';
import moment from 'moment';
import { Edit, Trash2 } from 'react-feather';
import { Box, Text } from '../../atoms';
import Avatar from '../../atoms/Avatar';
import { Message as ChatMessage } from '../../../types/chat';
import {
  Container,
  IconContainer,
  MessageContainer,
  MessageSubContainer,
  TimeContainer,
} from './styles';
import { AVATAR_URL } from '../../../constant';

export interface MessageProps {
  message: ChatMessage;
  isContinueMsg: boolean;
  isSelf: boolean;
  onEdit: (message: ChatMessage) => void;
  onDelete: (message: ChatMessage) => void;
}

const Message: React.FC<MessageProps> = ({
  message,
  isContinueMsg,
  isSelf,
  onEdit,
  onDelete,
}) => {
  const { text, name: sender, dateEdited } = message;

  return (
    <Container isSelf={isSelf} maxWidth={['60%', '85%']}>
      {!isContinueMsg ? (
        <Box>
          <Avatar
            src={AVATAR_URL + sender}
            alt="Avatar"
            width={46}
            height={46}
          />
        </Box>
      ) : (
        <Box width={46} />
      )}
      <MessageContainer isSelf={isSelf}>
        <MessageSubContainer isSelf={isSelf}>
          <div>{text}</div>
          <IconContainer className="icon-container" isSelf={isSelf}>
            <Trash2
              size={16}
              onClick={() => onDelete(message)}
              data-testid="delete-icon"
            />
            {isSelf && (
              <Edit
                size={16}
                onClick={() => onEdit(message)}
                data-testid="edit-icon"
              />
            )}
          </IconContainer>
        </MessageSubContainer>
        <TimeContainer isSelf={isSelf} className="time-container">
          <Text color="grey" fontSize={11}>
            {moment(dateEdited).format('h:mm A')}
          </Text>
        </TimeContainer>
      </MessageContainer>
    </Container>
  );
};

export default Message;
