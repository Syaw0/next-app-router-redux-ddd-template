'use client';

// ----------------------------------------------------------------------

// Redux
import { Provider } from 'react-redux';
// Redux Store
import { makeStore } from './store';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode | React.ReactElement;
};

export default function ReduxProvider({ children }: Props) {
  return <Provider store={makeStore()}>{children}</Provider>;
}
