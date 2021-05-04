import React, { useState } from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FaTimes, FaBars } from 'react-icons/fa';

import logo from '../../images/logo.webp';
import logo2 from '../../images/logo.png';
import * as styles from './Header.module.scss';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

const connectStyle = {
  textDecoration: 'none',
  height: '2.5rem',
  color: 'white',
  backgroundColor: 'rgba(255,255,255, 0.24)',
  border: '2px solid white',
  borderRadius: '0.5rem',
  padding: '0 2rem',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};

const subscribeStyle = {
  textDecoration: 'none',
  height: '2.5rem',
  backgroundColor: 'white',
  color: '#132B50',
  borderRadius: '0.5rem',
  padding: '0 2rem',
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  cursor: 'pointer',
};

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <picture>
          <source srcset={logo} type='image/webp'></source>
          <source srcset={logo2} type='image/png'></source>
          <img
            src={logo}
            onError="this.onerror=null; this.src='../../images/logo.png';"
            alt='Logo'
          />
        </picture>
        <div className={styles.flexEnd}>
          <ul className={clicked ? styles.activeMenu : styles.menu}>
            <li>
              <Link to='/' style={linkStyle}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/game' style={linkStyle}>
                Game
              </Link>
            </li>
            <li>
              <Link to='/' style={linkStyle}>
                Litepaper
              </Link>
            </li>
            <li>
              <Link to='/team' style={linkStyle}>
                Team
              </Link>
            </li>
            <li>
              <Link to='/nft' style={linkStyle}>
                NFT
              </Link>
            </li>
          </ul>
          <div className={clicked ? styles.activeButton : styles.button}>
            <button className={styles.connect}>Connect</button>
            <button
              className={styles.subscribe}
              onClick={() => scrollTo('#newsletter')}
            >
              Subscribe
            </button>
          </div>
          <button
            type='button'
            className={styles.menuIcon}
            onClick={handleClick}
          >
            {clicked ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
