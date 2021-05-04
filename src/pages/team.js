import * as React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

import SEO from '../components/SEO';
import user from '../images/user.svg';
import Header from '../components/Header';
import Social from '../components/Social';
import Footer from '../components/Footer';

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 100px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const wrapperStyle = {
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '5rem',
};

const title = {
  color: 'white',
  margin: '2.5rem 0',
};

const Team = () => {
  return (
    <main>
      <SEO title='Team' />
      <Header />
      <div style={containerStyle}>
        <div style={wrapperStyle}>
          <img
            src={user}
            alt='User'
            style={{
              backgroundColor: 'white',
              borderRadius: '50%',
              width: '100px',
            }}
          />
          <h2 style={{ color: 'white' }}>Uno</h2>
          <a href='https://www.linkedin.com/'>
            <FaLinkedinIn
              style={{
                backgroundColor: 'white',
                padding: '0.5rem',
                borderRadius: '25%',
              }}
            />
          </a>

          <h1 style={title}>Developers</h1>
          <h1 style={title}>Graphic Designers</h1>
        </div>
      </div>
      <Social />
      <Footer />
    </main>
  );
};

export default Team;
