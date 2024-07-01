import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';
import {
  BorderRadiusProps,
  ColorProps,
  FontSizeProps,
  SpaceProps,
  borderRadius,
  color,
  fontSize,
  space,
} from 'styled-system';

type ButtonProps = InputHTMLAttributes<HTMLInputElement> &
  SpaceProps &
  FontSizeProps &
  ColorProps &
  BorderRadiusProps;

const Button = styled.button<ButtonProps>`
  padding: ${({ theme }) => theme.space[4]}px;
  background-color: ${({ theme }) => theme.colors.veryLightBlue};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${color}
  ${space}
  ${fontSize}
  ${borderRadius}
`;

export default Button;
