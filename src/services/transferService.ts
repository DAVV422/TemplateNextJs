export async function createTransfer(formData: { 
  sourceAccountNumber: string; 
  destinationAccountNumber: string; 
  amount: number; 
}) {
  const baseUrl = process.env.BACKEND_API_URL || 'https://localhost:5059';

  const res = await fetch(`${baseUrl}/Bsol/v1/transactions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!res.ok) throw new Error('Error al procesar la transferencia');
  
  return res.json();
}