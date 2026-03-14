export default function Loading() {
  return (
    <div className="container">
      <div className="skeleton-title" style={{ height: '40px', width: '300px', marginBottom: '2rem' }}></div>
      <div className="stats-grid">
        {[1, 2, 3].map(i => <div key={i} className="stat-card skeleton" style={{ height: '120px' }}></div>)}
      </div>
      <div className="account-card skeleton" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
}