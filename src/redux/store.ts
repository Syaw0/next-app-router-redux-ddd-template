// Redux
import {
  TypedUseSelectorHook,
  useSelector as useAppSelector,
  useDispatch as useAppDispatch,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// Root reducer
import rootReducer from './rootReducer';

// ----------------------------------------------------------------------

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
};

// const { dispatch } = store;

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

const useDispatch = () => useAppDispatch<AppDispatch>();

export {
  makeStore,
  useDispatch,
  useSelector,
  // dispatch
};
