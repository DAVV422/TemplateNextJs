export interface TransactionResponse {
  id: string;
  transactionType: string;
  sourceAccountId: string;
  destinationAccountId: string;
  amount: number;
  timestamp: string; // Formato ISO 8601
  voucherCode: string;
}