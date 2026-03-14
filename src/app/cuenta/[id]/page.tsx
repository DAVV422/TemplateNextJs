import { getAccountDetails } from '@/services/accountService';

export default async function AccountDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const account = await getAccountDetails(id);

  if (!account) {
    throw new Error("Cuenta no encontrada"); // Esto activa el error.tsx
  }

  return (
    <div className="account-card">
      <div className="card-header">
        <span style={{ fontWeight: 600 }}>📊 Detalles de la Cuenta</span>
        <span className="badge-active">ACTIVA</span>
      </div>

      <div className="grid-details">
        <div>
          <p className="label-sub">ID DE REGISTRO (GUID)</p>
          <code style={{ color: '#a3257a', background: '#2d1b2a', padding: '0.2rem 0.5rem' }}>
            {account.id}
          </code>
        </div>
        <div>
          <p className="label-sub">NÚMERO DE CUENTA</p>
          <p style={{ fontSize: '1.2rem', fontFamily: 'monospace' }}>{account.accountNumber}</p>
        </div>
        <div>
          <p className="label-sub">SALDO DISPONIBLE</p>
          <p className="balance-text">
            {account.balance.toLocaleString('es-BO', { minimumFractionDigits: 2 })} 
            <span className="currency"> Bs.</span>
          </p>
        </div>
      </div>
    </div>
  );
}