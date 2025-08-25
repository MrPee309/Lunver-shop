import '../styles/globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Lunver-Shop',
  description: 'A modern online store with dynamic APIs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container header__inner">
            <div className="logo">
              <img src="/assets/logo.png" alt="Lunver-Shop logo" width="50" height="50" />
              <span>Lunver-Shop</span>
            </div>
            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <a href="/#about">About</a>
              <a href="/#contact">Contact</a>
            </nav>
            <button className="nav__toggle" aria-label="Open menu">☰</button>
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="container footer__inner">
            <p>© {new Date().getFullYear()} Lunver-Shop. All rights reserved.</p>
            <a className="muted" href="#">Privacy</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
