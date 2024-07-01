import styled from '@emotion/styled';
import { Box } from '../../atoms';

const Container = styled(Box)<{ isSelf: boolean }>`
  margin-bottom: ${(props) => props.theme.space[3]}px;
  font-size: 14px;
  display: flex;
  align-items: center;
  position: relative;

  ${(props) => (props.isSelf ? 'flex-direction: row-reverse;' : 'row')};
  ${(props) => (props.isSelf ? 'align-self: flex-end;' : 'flex-start')};

  &:hover .icon-container {
    cursor: pointer;
    opacity: 1;
  }

  &:hover .time-container {
    opacity: 0;
    z-index: -1;
  }
`;

const MessageContainer = styled(Box)<{ isSelf: boolean }>`
  display: flex;
  align-items: flex-end;
  ${(props) => (props.isSelf ? 'flex-direction: row-reverse;' : 'row')};
`;

const MessageSubContainer = styled(Box)<{ isSelf: boolean }>`
  background-color: ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.charcoalDark};
  padding: ${(props) => props.theme.space[4]}px;
  border-radius: 12px;
  position: relative;
  ${(props) =>
    props.isSelf
      ? `margin-right: ${props.theme.space[5]}px;`
      : `margin-left: ${props.theme.space[5]}px`}
`;

const IconContainer = styled(Box)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.2s;
  ${(props) => (props.isSelf ? 'left: -52px;' : 'right: -32px;')}
`;

const TimeContainer = styled(Box)<{ isSelf: boolean }>`
  text-wrap: nowrap;
  margin-bottom: ${(props) => props.theme.space[3]}px;
  ${(props) =>
    props.isSelf
      ? `margin-right: ${props.theme.space[3]}px;}`
      : `margin-left: ${props.theme.space[3]}px;}`}
`;

export {
  Container,
  MessageContainer,
  MessageSubContainer,
  IconContainer,
  TimeContainer,
};
