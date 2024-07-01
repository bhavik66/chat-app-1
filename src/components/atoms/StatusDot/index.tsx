import styled from '@emotion/styled';

const StatusDot = styled('div')<{ online: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.online ? props.theme.colors.americanGreen : props.theme.colors.grey};
`;

export default StatusDot;
