import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (window && typeof window !== 'undefined') {
      import('amplitude-js').then((amplitude) => {
        amplitude.getInstance().init('6ff982068177ae7675fcb1e777dcdf0b')
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
