import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', color: '#2563eb' }}>Welcome to Chalet Rental Dashboard</h1>
      <p style={{ marginTop: '0.5rem' }}>Manage your chalet bookings and availability seamlessly!</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        <Link href="/chalets">
          <div style={cardStyle}>
            <strong>View Chalets</strong>
            <p>Browse available chalets for rent</p>
          </div>
        </Link>

        <Link href="/add-chalet">
          <div style={cardStyle}>
            <strong>Manage Bookings</strong>
            <p>Track bookings and availability</p>
          </div>
        </Link>

        <Link href="/settings">
          <div style={cardStyle}>
            <strong>Settings</strong>
            <p>Update your dashboard preferences</p>
          </div>
        </Link>
      </div>
    </main>
  );
}

const cardStyle = {
  width: '180px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '1rem',
  textAlign: 'center',
  cursor: 'pointer',
  backgroundColor: '#fff',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
};
