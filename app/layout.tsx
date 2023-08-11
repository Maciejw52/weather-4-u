import type { Metadata } from 'next'
import React, { PropsWithChildren } from "react";
import HeaderBar from './components/header-bar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Weather4U',
}

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <HeaderBar />
        {children}
      </body>
    </html>
  );
};
export default Layout;
