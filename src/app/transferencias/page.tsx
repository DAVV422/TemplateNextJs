import { getTransactions } from '@/services/transactionService';
import { TransactionResponse } from '@/types/transaction';

export default async function TransferenciasPage() {
  const transactions: TransactionResponse[] = await getTransactions();

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">Historial de Transferencias</h1>
      </header>

      {/* ... (sección de stats-grid se mantiene igual) ... */}

      <div className="account-card">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>ID de Transacción</th>
              <th>Tipo</th>
              <th>Origen / Destino</th>
              <th>Monto</th>
              <th>Fecha y Hora</th>
              <th>Voucher</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id}>
                <td className="text-muted" style={{ fontSize: '0.7rem' }}>
                  {txn.id.substring(0, 18)}...
                </td>
                <td>
                  <span className={`type-badge type-externa`}>
                    {txn.transactionType === 'Transfer' ? 'Interna' : txn.transactionType}
                  </span>
                </td>
                <td>
                  <div style={{ fontSize: '0.85rem' }}>
                    <p>De: <span className="text-muted">...{txn.sourceAccountId.slice(-4)}</span></p>
                    <p>A: <span className="text-muted">...{txn.destinationAccountId.slice(-4)}</span></p>
                  </div>
                </td>
                <td style={{ fontWeight: '600' }}>
                  ${txn.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
                <td className="text-muted" style={{ fontSize: '0.85rem' }}>
                  {formatDate(txn.timestamp)}
                </td>
                <td style={{ color: '#a3257a', fontWeight: '500' }}>
                  {txn.voucherCode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}