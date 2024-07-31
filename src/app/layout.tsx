// app/layout.tsx
import {Providers} from "./providers";
import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata = {
  title:'MYG',
  description: 'tes PWA MYG',
  manifest:'./manifest.json'
}
export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='light'>
      <body className="leading-normal tracking-normal">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}