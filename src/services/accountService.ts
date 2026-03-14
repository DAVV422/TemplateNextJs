import { AccountResponse } from "@/types/account";
import https from 'https';

export async function getAccountDetails(accountNumber: string): Promise<AccountResponse | null> {
  const baseUrl = process.env.BACKEND_API_URL || 'https://localhost:5059';
  const devMode = process.env.NODE_ENV || 'development';
  
  // Agente que ignora la validación de certificados
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  try {
    const res = await fetch(`${baseUrl}/Bsol/v1/accounts/${accountNumber}`, {
      next: { revalidate: 60 },
      // @ts-ignore - 'agent'
      agent: devMode === 'development' ? agent : undefined,
    });

    if (!res.ok) {
      console.error(`Error API: ${res.status} ${res.statusText}`);
      return null;
    }
    
    return await res.json();
  } catch (error) {
    // Aquí es donde capturamos el "fetch failed"
    console.error("Error detallado en fetch:", error);
    throw error; // Lanzamos para que error.tsx lo capture
  }
}