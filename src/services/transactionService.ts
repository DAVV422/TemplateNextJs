import { TransactionResponse } from "@/types/transaction";

export async function getTransactions(): Promise<TransactionResponse[]> {
  const baseUrl = process.env.BACKEND_API_URL || 'https://localhost:5059';
  
  const res = await fetch(`${baseUrl}/Bsol/v1/transactions`, {
    next: { revalidate: 30 }, // Cache por 30 segundos
  });

  if (!res.ok) {
    throw new Error('FAILED_TO_FETCH_TRANSACTIONS');
  }

  return res.json();
}