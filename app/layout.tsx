import './globals.css';
import Nav from './components/Nav';
import FilterCity from './components/FilterCity';
import { PropertiesContextProvider } from './contexts/Properties/PropertiesContext';

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
          <Nav/>
          {children}
        </PropertiesContextProvider>
      </body>
    </html>
  )
}
