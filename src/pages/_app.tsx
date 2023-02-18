import client from '@/graphql/config'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  <ApolloProvider client={client}>
        <Component {...pageProps} />
  </ApolloProvider>
}
