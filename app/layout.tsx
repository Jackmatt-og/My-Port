
//These styles will be applied to the whole app
import Navbar from './components/Navbar';
import Theme from './components/Themes';
import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
            <Navbar />
            <Theme />
        {children}
      </body>
    </html>
  )
}
