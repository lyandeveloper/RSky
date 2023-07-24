import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { ToastContainer } from 'react-toastify';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import 'react-toastify/dist/ReactToastify.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss'; 
import 'react-input-range/lib/css/index.css';
import '../styles/globals.scss';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());



export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RSky</title>
      </Head>
      <Component {...pageProps} />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
