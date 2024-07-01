import { Button } from '../../atoms';
import { Send } from 'react-feather';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MsgInput, SendMsgContainer } from './styles';
import { Message } from '../../../types/chat';

export interface SendMsgProps {
  editMessage: Message | null;
  handleSendMessage: (text: string) => void;
}

const SendMsg: React.FC<SendMsgProps> = ({
  editMessage,
  handleSendMessage,
}) => {
  const { t } = useTranslation();

  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (editMessage) {
      setText(editMessage.text);
    }
  }, [editMessage]);

  const onSendMsg = () => {
    if (text) {
      handleSendMessage(text);
      setText('');
    }
  };

  return (
    <SendMsgContainer>
      <MsgInput
        px={20}
        py={14}
        placeholder={t('chat.typeAMessage')}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={onSendMsg}>
        <Send color="white" size={22} />
      </Button>
    </SendMsgContainer>
  );
};

export default SendMsg;
