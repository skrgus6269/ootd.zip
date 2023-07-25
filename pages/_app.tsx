import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/styles/globalStyle'
import themes from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={themes}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
