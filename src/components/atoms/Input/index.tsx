import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';
import {
  space,
  color,
  layout,
  typography,
  border,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
  BorderProps,
} from 'styled-system';

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  SpaceProps &
  ColorProps &
  LayoutProps &
  TypographyProps &
  BorderProps;

const Input = styled.input<InputProps>`
  display: flex;
  width: 100%;
  border: none;
  font-size: 16px;
  background-color: transparent;
  &::placeholder {
    color: ${({ theme }) => theme.colors.silverFoil};
  }

  &:focus {
    outline: none;
  }

  ${space}
  ${color}
  ${layout}
  ${typography}
  ${border}
`;

export default Input;
