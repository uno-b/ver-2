import * as React from 'react';

import SEO from '../components/SEO';
import Header from '../components/Header';
import Social from '../components/Social';
import Footer from '../components/Footer';

const Game = () => {
  return (
    <main>
      <SEO title='Game' />
      <Header />
      <h1
        style={{
          width: '100%',
          height: 'calc(100vh - 100px)',
          margin: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        Coming Soon
      </h1>
      <Social />
      <Footer />
    </main>
  );
};

export default Game;
