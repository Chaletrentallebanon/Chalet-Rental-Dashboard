import Head from 'next/head';
import ChaletRentalDashboard from '../src/ChaletRentalDashboard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chalet Rental Lebanon</title>
      </Head>
      <main>
        <ChaletRentalDashboard />
      </main>
    </>
  );
}
