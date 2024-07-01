import React from 'react';
import { Box } from '../../atoms';
import Avatar from '../../atoms/Avatar';
import Text from '../../atoms/Text';
import Chip, { VariantStyleEnum } from '../../atoms/Chip';
import { CardContainer, InfoContainer, LabelsContainer } from './styles';

export interface UserCardProps {
  avatarSrc: string;
  name: string;
  message: string;
  time: string;
  labels: { text: string; variant: string }[];
  selected: boolean;
}

const UserCard: React.FC<UserCardProps> = ({
  avatarSrc,
  name,
  message,
  time,
  labels,
  selected,
}) => (
  <CardContainer selected={selected} width={[260, 320]}>
    <Box>
      <Avatar src={avatarSrc} alt={name} width={52} height={52} />
    </Box>
    <InfoContainer>
      <Text fontSize={14} fontWeight="bold" color="text">
        {name}
      </Text>
      <Text fontSize={12} color="gray">
        {message}
      </Text>
      <LabelsContainer>
        {labels.map((label, index) => (
          <Chip
            key={`${index}-${label.text}`}
            variant={label.variant as VariantStyleEnum}
          >
            {label.text}
          </Chip>
        ))}
      </LabelsContainer>
    </InfoContainer>
    <Box marginLeft="auto">
      <Text fontSize={12} color="gray">
        {time}
      </Text>
    </Box>
  </CardContainer>
);

export default UserCard;
