import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@theme/index';

import { IApps } from '@generalTypes/index';

export default function App({ Component, pageProps }: IApps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
