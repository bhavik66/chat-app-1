import styled from '@emotion/styled';
import { Box, Input } from '../../atoms';

const SendMsgContainer = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 20px;
  flex: 1;
`;

const MsgInput = styled(Input)`
  display: flex;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.charcoalDark};
  align-items: center;
`;

export { SendMsgContainer, MsgInput };
