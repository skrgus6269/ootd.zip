import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import themes from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
