import { breakpoints, themeVars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  padding: '1rem',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  marginBottom: '1.5rem',

  '@media': {
    [`screen and (min-width: ${breakpoints.tablet})`]: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: '1rem',
      padding: '1rem 1.5rem',
    },
  },
});

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 100%',

  '@media': {
    [`screen and (min-width: ${breakpoints.tablet})`]: {
      flex: '1 1 calc(25% - 1rem)', // 4 inputs por fila en desktop
    },
  },
});

export const label = style({
  fontSize: '0.85rem',
  color: themeVars.color.text.secondary,
  marginBottom: '0.25rem',
});

export const input = style({
  padding: '0.6rem 0.8rem',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',

  ':focus': {
    borderColor: themeVars.color.accent,
    boxShadow: `0 0 0 2px ${themeVars.color.accent}20`,
  },
});

export const button = style({
  padding: '0.7rem 1.2rem',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#0b5ed7',
  color: '#fff',
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: '0.95rem',
  transition: 'background-color 0.2s ease, transform 0.1s ease',

  ':hover': {
    backgroundColor: '#0b5ed7',
  },

  ':active': {
    transform: 'scale(0.98)',
  },

  ':disabled': {
    backgroundColor: '#adb5bd',
    cursor: 'not-allowed',
  },

  '@media': {
    [`screen and (min-width: ${breakpoints.tablet})`]: {
      flex: '0 0 auto',
      alignSelf: 'flex-end',
    },
  },
});
