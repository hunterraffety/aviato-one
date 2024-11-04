'use client'

import { ApolloProvider } from '@apollo/client'
import client from './lib/apollo-client'

export function Providers({ children }: { children: React.ReactNode }) {
  console.log(children, 'children passing through provider ***')
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
