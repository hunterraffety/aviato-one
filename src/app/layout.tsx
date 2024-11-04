'use client'

import './globals.scss'
import { ApolloProvider } from '@apollo/client'
import client from './lib/apollo-client'
import { ToastProvider } from './context/ToastContext'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white font-sans text-gray-800 background-fixed ">
        <ApolloProvider client={client}>
          <ToastProvider>
            <Navbar />
            <Hero />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ToastProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}
