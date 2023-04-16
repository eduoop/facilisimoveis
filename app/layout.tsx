import './globals.css';
import { GlobalContextProvider } from './Context/store';
import Nav from './components/Nav';
import FilterCity from './components/FilterCity';

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
        <GlobalContextProvider>
          <Nav/>
          <FilterCity/>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
