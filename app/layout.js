import React from 'react'
import {Poppins} from 'next/font/google'
import './globals.css'

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  });

export default function RootLayout({children}) {
  return (
    <html lang="en" className={poppins.className}>
    <body>
      <div>{children}</div>
    </body>
  </html>
  )
}
