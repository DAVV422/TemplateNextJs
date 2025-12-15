// Example type definitions for your application

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export type Status = "idle" | "loading" | "success" | "error";
