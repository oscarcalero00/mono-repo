import { createTheme } from '@vanilla-extract/css';

export const [themeClass, themeVars] = createTheme({
  color: {
    background: '#f8f9fa',
    text: {
      primary: '#212529',
      secondary: '#495057',
    },
    accent: '#0d6efd',
  },
  font: {
    family: 'Inter, system-ui, sans-serif',
    size: {
      body: '16px',
      heading: '24px',
    },
  },
  button:{ 
    primaryBackground: '#0d6efd',
    primaryColor: '#ffffff',
    secondaryBackground: '#6c757d',
    secondaryColor: '#ffffff',
    background : '#0b5ed7'
  }
});

export const breakpoints = {
  tablet: '768px',
  desktop: '1024px',
};
