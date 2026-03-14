'use client'
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div style={{ padding: '3rem', textAlign: 'center', backgroundColor: '#2d1b2a', borderRadius: '12px' }}>
      <h2 style={{ color: '#ff4d4d' }}>Hubo un error al consultar la cuenta</h2>
      <p style={{ margin: '1rem 0' }}>Verifica que el número sea correcto o intenta de nuevo.</p>
      <button onClick={() => reset()} className="btn-primary">Reintentar</button>
    </div>
  );
}