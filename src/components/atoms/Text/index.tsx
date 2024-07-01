import styled from '@emotion/styled';
import {
  typography,
  color,
  space,
  TypographyProps,
  ColorProps,
  SpaceProps,
} from 'styled-system';
import { HTMLAttributes } from 'react';

type TextProps = HTMLAttributes<HTMLParagraphElement> &
  TypographyProps &
  ColorProps &
  SpaceProps;

const Text = styled.p<TextProps>`
  margin: 0;
  ${typography}
  ${color}
  ${space}
`;

export default Text;
