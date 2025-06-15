export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#4A90E2' }}>
        Welcome to Chalet Rental Dashboard
      </h1>
      <p style={{ textAlign: 'center' }}>
        Manage your chalet bookings and availability seamlessly!
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ margin: '0 20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
          <h3>View Chalets</h3>
          <p>Browse available chalets for rent</p>
        </div>
        <div style={{ margin: '0 20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Manage Bookings</h3>
          <p>Track bookings and availability</p>
        </div>
        <div style={{ margin: '0 20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Settings</h3>
          <p>Update your dashboard preferences</p>
        </div>
      </div>
    </div>
  );
}
