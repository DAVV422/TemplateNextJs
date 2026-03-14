import TransferForm from '@/components/TransferForm';

export default function Page() {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">Realizar Transferencia</h1>
        <p className="main-description">Envía dinero de forma segura y rápida a cualquier cuenta.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
        <TransferForm />

        {/* Panel lateral de Tips (Siguiendo tu imagen) */}
        <aside className="stat-card" style={{ height: 'fit-content' }}>
          <h3 style={{ color: '#a3257a', marginBottom: '1rem' }}>Tips de Seguridad</h3>
          <ul style={{ color: '#887786', fontSize: '0.85rem', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
            <li>Verifica siempre el nombre del titular antes de enviar.</li>
            <li>Nunca compartas tus claves por teléfono ni email.</li>
            <li>Recuerda que las transferencias inmediatas no tienen devolución.</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}