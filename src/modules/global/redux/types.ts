// Types
import { ThemeOptions } from '@/types';

// ----------------------------------------------------------------------

export interface GlobalStateType {
  theme: ThemeOptions;
  loading: boolean;
  error: null | string;
}
