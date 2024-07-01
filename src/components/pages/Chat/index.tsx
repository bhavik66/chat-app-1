import Conversations from '../../organisms/Conversations';
import { Box } from '../../atoms';
import { Messages } from '../..';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  deleteMessageRequest,
  editMessageRequest,
  fetchMessagesRequest,
  onEditMessage,
  sendMessageRequest,
} from '../../../store/slices/chat/chatSlice';
import { Message } from '../../../types/chat';

const Chat = () => {
  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector((state: RootState) => state.chat.messages);
  const loading = useSelector((state: RootState) => state.chat.loading);
  const error = useSelector((state: RootState) => state.chat.error);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const name = useSelector((state: RootState) => state.chat.name);
  const editMessage = useSelector((state: RootState) => state.chat.editMessage);
  const isMsgSent = useRef(true);

  useEffect(() => {
    dispatch(fetchMessagesRequest());
    const interval = setInterval(() => dispatch(fetchMessagesRequest()), 3000);
    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    if (messagesEndRef.current && isMsgSent.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      if (messages.length > 0) {
        isMsgSent.current = false;
      }
    }
  }, [messages]);

  const handleEdit = (message: Message) => {
    dispatch(onEditMessage(message));
  };

  const handleDelete = (message: Message) => {
    dispatch(deleteMessageRequest(message.id));
  };

  const handleSendMessage = (text: string) => {
    const message = {
      id: editMessage?.id || uuidv4(),
      text,
      name,
    };
    if (editMessage) {
      dispatch(editMessageRequest(message));
    } else {
      dispatch(sendMessageRequest(message));
    }
    isMsgSent.current = true;
  };

  return (
    <Box display="flex" flex={1}>
      <Conversations />
      <Messages
        name={name}
        loading={loading}
        error={error}
        messages={messages}
        messagesEndRef={messagesEndRef}
        editMessage={editMessage}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleSendMessage={handleSendMessage}
      />
    </Box>
  );
};

export default Chat;
