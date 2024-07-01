import styled from '@emotion/styled';

interface AlertProps {
  variant: 'success' | 'error' | 'warning' | 'info';
}

const Alert = styled('div')<AlertProps>`
  padding: 1em;
  margin: 1em 0;
  border-radius: 4px;
  font-weight: bold;
  ${(props) => {
    switch (props.variant) {
      case 'success':
        return `
          background-color: ${props.theme.colors.americanGreen};
          border: 1px solid ${props.theme.colors.americanGreen};
          color: ${props.theme.colors.white};
        `;
      case 'error':
        return `
          background-color: ${props.theme.colors.rustyRed};
          border: 1px solid ${props.theme.colors.rustyRed};
          color: ${props.theme.colors.white};
        `;
      case 'warning':
        return `
          background-color: ${props.theme.colors.mikadoYellow};
          border: 1px solid ${props.theme.colors.mikadoYellow};
          color: ${props.theme.colors.black};
        `;
      case 'info':
        return `
          background-color: ${props.theme.colors.blueGreen03};
          border: 1px solid ${props.theme.colors.blueGreen03};
          color: ${props.theme.colors.grey};
        `;
      default:
        return '';
    }
  }}
`;

export default Alert;
