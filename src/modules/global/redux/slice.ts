// Redux
import { createSlice } from '@reduxjs/toolkit';
// Initial state
import { initialGlobalState } from './states';

// ----------------------------------------------------------------------

export const globalSlice = createSlice({
  name: 'global',
  initialState: initialGlobalState,
  reducers: {
    // Start Loading
    startLoading(state) {
      state.loading = true;
      state.error = null;
    },

    // Success Operation
    successOperation(state) {
      state.loading = false;
    },

    // Has Error
    hasError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // Change Theme Mod
    changeThemeMode(state, action) {
      state.loading = false;
      state.error = null;
      state.theme = action.payload;
    },
  },
});
