import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="app-container">
          <aside className="sidebar">
            <div className="brand">🏦 BankFlow</div>
            <nav className="nav-list">
              <Link href="/cuenta" className="nav-item active">💳 Cuentas</Link>
              <Link href="/transferencias" className="nav-item">⇄ Transferencias</Link>
              <Link href="/realizar-transferencia" className="nav-item">📄 Pagos</Link>
            </nav>
          </aside>
          
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}