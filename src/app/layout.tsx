// Next
import type { Metadata, Viewport } from 'next';
// Theme
import ThemeRegistry from '@/themes';
import { yekan } from '@/themes/typography';
// Redux
import ReduxProvider from '@/redux/reduxProvider';

// ----------------------------------------------------------------------

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

export const metadata: Metadata = {
  title: {
    template: '%s | Next App Router Redux ddd Template',
    default: 'Next App Router Redux ddd Template',
  },
  description: '',
  keywords: [''],
  authors: [{ name: 'Siavash Mohebbi', url: '' }],
  icons: [
    { rel: 'apple-touch-icon', url: 'fav/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'icon', type: 'image/png', url: 'fav/favicon.ico' },
    { rel: 'icon', type: 'image/png', url: 'fav/favicon-32x32.png', sizes: '32x32' },
    { rel: 'icon', type: 'image/png', url: 'fav/favicon-16x16.png', sizes: '16x16' },
  ],
  manifest: 'fav/site.webmanifest',
  other: {
    'emotion-insertion-point': '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <ReduxProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
