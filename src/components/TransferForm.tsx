'use client'
import { useState } from 'react';
import { createTransfer } from '@/services/transferService';

export default function TransferForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{transactionId: string, voucherCode: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      sourceAccountNumber: formData.get('source') as string,
      destinationAccountNumber: formData.get('destination') as string,
      amount: Number(formData.get('amount')),
    };

    try {
      const response = await createTransfer(data);
      setResult(response);
    } catch (err) {
      setError('Hubo un problema con la transacción. Intente de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="transfer-page">
      <form onSubmit={handleSubmit} className="transfer-card">
        <div className="form-group">
          <label>Cuenta de Origen</label>
          <input name="source" type="text" required className="input-main" placeholder="Ej: 10003" />
        </div>

        <div className="form-group">
          <label>Cuenta de Destino</label>
          <input name="destination" type="text" required className="input-main" placeholder="Nombre de usuario o cuenta" />
        </div>

        <div className="form-group">
          <label>Monto a Transferir</label>
          <input name="amount" type="number" step="0.01" required className="input-main" placeholder="0.00" />
        </div>

        {error && <p style={{ color: '#ff4d4d', marginBottom: '1rem' }}>{error}</p>}

        <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', marginTop: '1rem' }}>
          {loading ? <span className="spinner"></span> : null}
          {loading ? 'Procesando...' : 'Confirmar Transferencia ➤'}
        </button>
      </form>

      {/* Modal de Éxito */}
      {result && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>¡Transferencia Exitosa!</h2>
            <div style={{ textAlign: 'left', background: '#2d1b2a', padding: '1rem', borderRadius: '8px', fontSize: '0.9rem' }}>
              <p style={{ color: '#887786' }}>ID Transacción:</p>
              <p style={{ color: 'white', marginBottom: '1rem', wordBreak: 'break-all' }}>{result.transactionId}</p>
              <p style={{ color: '#887786' }}>Código Voucher:</p>
              <p style={{ color: '#a3257a', fontWeight: 'bold' }}>{result.voucherCode}</p>
            </div>
            <button onClick={() => setResult(null)} className="btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}>
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}