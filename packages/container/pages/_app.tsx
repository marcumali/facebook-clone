import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import '../styles/_main.scss'

export default function App({ Component, pageProps: { session, ...pageProps }}: AppProps) {
	const PageComponent: any = Component
  return (
    <SessionProvider session={session}>
      <PageComponent {...pageProps} />
    </SessionProvider>
  )
}
