import { Input, Text } from '../../atoms';
import { useTranslation } from 'react-i18next';
import { SearchInputContainer } from './styles';

const SearchInput = () => {
  const { t } = useTranslation();
  return (
    <SearchInputContainer>
      <Text fontSize={12}>{t('chat.search')}</Text>
      <Input
        placeholder={t('chat.searchMessage')}
        color="charcoalDark"
        ml={12}
      />
    </SearchInputContainer>
  );
};

export default SearchInput;
