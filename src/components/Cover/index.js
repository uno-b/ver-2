import React from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { FaPlayCircle } from 'react-icons/fa';
import cover from '../../images/cover.webp';
import cover2 from '../../images/cover.png';
import * as styles from './Cover.module.scss';

const Cover = () => {
  return (
    <div className={styles.container}>
      <picture>
        <source srcset={cover} type='image/webp'></source>
        <source srcset={cover2} type='image/png'></source>
        <img
          src={cover}
          onError="this.onerror=null; this.src='../../images/cover.png';"
          className={styles.cover}
        />
      </picture>

      <div className={styles.fade} />
      <div className={styles.column}>
        <h1>Uno's Game Website</h1>
        <button
          onClick={() => scrollTo('#newsletter')}
          className={styles.subscribe}
          style={{ textDecoration: 'none' }}
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Cover;
