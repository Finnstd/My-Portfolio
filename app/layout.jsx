import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';
import { ThemeProvider } from './components/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio showcasing projects and skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
