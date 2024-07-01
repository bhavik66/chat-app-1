import styled from '@emotion/styled';
import { Box } from '../../atoms';

const CardContainer = styled(Box)<{ selected: boolean }>`
  display: flex;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.background};
  margin-top: ${(props) => props.theme.space[4]}px;
  margin-bottom: ${(props) => props.theme.space[4]}px;
  padding: ${(props) => props.theme.space[4]}px;
  &:hover {
    background-color: ${(props) => props.theme.colors.lavenderBlush};
    border-radius: 12px;
    cursor: pointer;
  }

  ${(props) =>
    props.selected && `background-color: ${props.theme.colors.lavenderBlush};`}

  border-radius: 12px;
`;

const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const LabelsContainer = styled(Box)`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export { CardContainer, InfoContainer, LabelsContainer };
