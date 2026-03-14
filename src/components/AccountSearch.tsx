'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import './AccountSearch.css'; // Asegúrate de que la ruta apunte a tu archivo CSS

export default function AccountSearch() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/cuenta/${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-card">
      <label className="label-search">
        Buscar por Identificador o Número de Cuenta
      </label>
      <div className="input-group">
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ej: 10003"
          className="input-main"
        />
        <button type="submit" className="btn-primary">
          Buscar
        </button>
      </div>
    </form>
  );
}