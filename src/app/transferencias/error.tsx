'use client'
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="error-container" style={{ textAlign: 'center', padding: '5rem' }}>
      <h2 style={{ color: '#ff4d4d' }}>Error al cargar el historial</h2>
      <p style={{ color: '#887786', margin: '1rem 0' }}>No pudimos obtener la lista de transacciones.</p>
      <button onClick={() => reset()} className="btn-primary">Reintentar</button>
    </div>
  );
}