import Head from 'next/head';
import LandingPage from '../components/LandingPage';
import ReactModal from 'react-modal';

export default function App() {
  return (
    <>
      <Head>
        <title>RSky</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LandingPage />
    </>
  );
}
