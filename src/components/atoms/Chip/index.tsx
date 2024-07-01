// src/components/Chip.js
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { space, color, typography, layout } from 'styled-system';

export enum VariantStyleEnum {
  Question = 'question',
  HelpWanted = 'helpWanted',
  SomeContent = 'someContent',
}

//TODO: Make this like alert
const variantStyles = {
  question: {
    backgroundColor: '#fbebcd',
    color: '#d47e45',
    border: 'unset',
  },
  helpWanted: {
    backgroundColor: '#d0f4d8',
    color: '#65a87a',
    border: 'unset',
  },
  someContent: {
    backgroundColor: '#f6f6fd',
    color: '#97a0b1',
    border: '1px solid #97a0b1',
  },
  // Add more variants as needed
};

const Chip = styled.span<{ variant: VariantStyleEnum }>(
  ({ variant }) => ({
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
    backgroundColor: variantStyles[variant].backgroundColor,
    color: variantStyles[variant].color,
    border: variantStyles[variant]?.border,
  }),
  space,
  color,
  typography,
  layout,
);

export default Chip;
