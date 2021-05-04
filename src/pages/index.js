import * as React from 'react';

import Header from '../components/Header';
import Cover from '../components/Cover';
import Information from '../components/Information';
import Newsletter from '../components/Newsletter';
import Social from '../components/Social';
import Footer from '../components/Footer';
import './index.scss';

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header />
      <Cover />
      <Information />
      <Newsletter />
      <Social />
      <Footer />
    </main>
  );
};

export default IndexPage;
