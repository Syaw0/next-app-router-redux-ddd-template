// Redux
import { Dispatch } from '@reduxjs/toolkit';
// Actions
import { changeThemeMode, hasError } from '../actions';
// Services
import { themeService } from '../../services';

// ----------------------------------------------------------------------

export default function changeTheme(newTheme: 'dark' | 'light') {
  return async (dispatch: Dispatch) => {
    try {
      themeService.changeTheme(newTheme);

      dispatch(changeThemeMode(newTheme));
    } catch (err) {
      dispatch(hasError(err));
    }
  };
}
