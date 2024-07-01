// Header.test.tsx
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/theme';
import Header from '.';

test('renders Header component with correct styles', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Header data-testid="header" />
    </ThemeProvider>,
  );

  const header = getByTestId('header'); // Assuming the role is 'banner'. Adjust based on your actual component.

  expect(header).toHaveStyle('display: flex');
  expect(header).toHaveStyle('background-color: #ffffff66');
  expect(header).toHaveStyle('border-bottom-width: 1px');
  expect(header).toHaveStyle('border-bottom-style: solid');
  expect(header).toHaveStyle('border-bottom-color: #dee2e6;');
});
