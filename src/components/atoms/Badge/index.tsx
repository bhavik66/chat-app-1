import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';
import { PositionProps, SpaceProps, position, space } from 'styled-system';

type BadgeProps = InputHTMLAttributes<HTMLInputElement> &
  SpaceProps &
  PositionProps;

const Badge = styled('span')<BadgeProps>`
  display: inline-flex;
  align-items: center;
  padding: 0em 0.6em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  white-space: nowrap;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.charcoalDark};
  background-color: ${({ theme }) => theme.colors.antiFlashWhite};
  ${position}
  ${space}
`;

export default Badge;
