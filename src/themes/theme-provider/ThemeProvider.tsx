import { useEffect } from 'react';
// @Mui
import { createTheme, ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
// Theme typography
import typography from '@/themes/typography';
// Theme shadow
import customShadows from '@/themes/shadow';
// Theme palette
import palette from '@/themes/palette';
// Theme global styles
import globalStyles from '@/themes/global-style';
// Redux
import { useDispatch, useSelector } from '@/redux/store';
// Services
import { themeService } from '@/modules/global/services';
// Operators
import changeTheme from '@/modules/global/redux/operators/changeTheme';
// Types
import { ThemeOptions } from '@/types';

// ----------------------------------------------------------------------

export const muiTheme = (mode: ThemeOptions) =>
  createTheme({
    direction: 'rtl',
    typography,
    palette: palette(mode),
    customShadows: customShadows(mode),
  });

type Props = {
  children: React.ReactElement | React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.global);

  useEffect(() => {
    const themeMode = themeService.getTheme();

    if (themeMode !== theme) {
      dispatch(changeTheme(themeMode as ThemeOptions));
    }
  }, [dispatch, theme]);

  return (
    <MUIThemeProvider theme={muiTheme(theme)}>
      <CssBaseline />
      {globalStyles}

      {children}
    </MUIThemeProvider>
  );
}
