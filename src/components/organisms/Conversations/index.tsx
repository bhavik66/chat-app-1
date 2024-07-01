import { Badge, Box, Button, Text } from '../../atoms';
import UserCard from '../../molecules/UserCard';
import SearchInput from '../../molecules/SearchInput';
import Header from '../../molecules/Header';
import { ChevronDown, Plus } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { Container, ConversationContainer, UserContainer } from './styles';
import { sampleConversations } from '../../../data/sample';

const Conversations = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header padding={[7]} justifyContent="space-between" alignItems="center">
        <Box display={'flex'} flexDirection={'row'}>
          <Text fontWeight="bold" fontSize={20} mr={2}>
            {t('chat.messages')}
          </Text>
          <ChevronDown />
          <Badge ml={2}>12</Badge>
        </Box>
        <Box>
          <Button borderRadius={'50%'} p={2}>
            <Plus size={24} />
          </Button>
        </Box>
      </Header>
      <ConversationContainer>
        <Box width="100%" boxSizing="border-box">
          <SearchInput />
        </Box>
        <UserContainer>
          {sampleConversations.map((x, i) => (
            <UserCard selected={i === 1} key={`${i}`} {...x} />
          ))}
        </UserContainer>
      </ConversationContainer>
    </Container>
  );
};

export default Conversations;
