import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>kang-heewon RESEUME</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Profile />
  </div>
);

export default Home;
