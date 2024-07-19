// app/layout.tsx
import {Providers} from "./providers";
import "./globals.css";

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