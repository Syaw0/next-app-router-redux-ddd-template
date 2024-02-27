// Redux
import { combineReducers } from 'redux';
// Slices
import { globalSlice } from '@/modules/global/redux';

// ----------------------------------------------------------------------

const rootReducer = combineReducers({
  global: globalSlice.reducer,
});

export default rootReducer;
