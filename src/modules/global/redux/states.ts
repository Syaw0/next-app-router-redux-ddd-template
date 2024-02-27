// Configs
import defaultAppConfig from '@/config/defaultAppConfig';
// Types
import { GlobalStateType } from './types';

// ----------------------------------------------------------------------

export const initialGlobalState: GlobalStateType = {
  error: null,
  loading: false,
  theme: defaultAppConfig.theme,
};
