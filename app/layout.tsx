"use client"
import './globals.css';
import Nav from './components/Nav';
import FilterCity from './components/FilterCity';
import { PropertiesContextProvider } from './contexts/Properties/PropertiesContext';
import toast, { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <PropertiesContextProvider>
          <Nav />
          <FilterCity />
          <Toaster />
          {children}
        </PropertiesContextProvider>
        <Footer/>
      </body>
    </html>
  )
}
