'use client';

// ----------------------------------------------------------------------

// Emotion
import { CacheProvider } from '@emotion/react';
// Utils
import { createEmotionCache } from '@/utils';
// Theme provider
import ThemeProvider from '@/themes/theme-provider';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactElement | React.ReactNode;
};

export default function ThemeRegistry({ children }: Props) {
  return (
    <CacheProvider value={createEmotionCache()}>
      <ThemeProvider>{children}</ThemeProvider>
    </CacheProvider>
  );
}
