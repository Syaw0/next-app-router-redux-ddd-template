import { GlobalStyles } from '@mui/material';

// ----------------------------------------------------------------------

const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
      },
      html: {
        maxWidth: '100vw',
        overflowX: 'hidden',
      },
      body: {
        maxWidth: '100vw',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    })}
  />
);

export default globalStyles;
