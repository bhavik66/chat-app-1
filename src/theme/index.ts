// src/theme.js
export const theme = {
  colors: {
    americanGreen: '#28a745',
    antiFlashWhite: '#ECf2F6',
    background: '#ffffff66',
    black: '#000',
    blueGreen03: '#17a2b833',
    charcoal: '#343a40',
    charcoalDark: '#464646',
    gainsboro: '#dee2e6',
    grey: '#6c757d',
    lightGray: '#f0f0f0',
    lavenderBlue: '#DFE0FC',
    lavenderBlush: '#f6f6fd',
    mikadoYellow: '#ffc107',
    rustyRed: '#dc3545',
    slateBlue: '#6669D9',
    veryLightBlue: '#5f63ef',
    white: '#fff',
    silverFoil: '#b0b0b0',
    // Add other colors as needed
  },
  space: [0, 2, 4, 8, 12, 16, 24, 32, 48, 64],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64],
  // Add other theme properties as needed
};

export type Theme = typeof theme;
