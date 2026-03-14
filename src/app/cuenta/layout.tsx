// app/cuenta/layout.tsx
import './styles.css';
import AccountSearch from '@/components/AccountSearch';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">Ver Cuenta</h1>
        <p className="main-description">
          Consulte los detalles técnicos y el estado de su cuenta bancaria.
        </p>
      </header>
      
      <AccountSearch />
      
      <section className="content-area">
        {children}
      </section>
    </div>
  );
}