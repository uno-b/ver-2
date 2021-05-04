import React from 'react';

import { FaMediumM, FaTelegramPlane, FaTwitter } from 'react-icons/fa';

import * as styles from './Social.module.scss';

const socialStyle = {
  backgroundColor: 'white',
  color: 'rgb(35, 34, 32)',
  margin: '0 1rem',
  padding: '0.5rem',
  borderRadius: '50%',
};

const Social = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a href='https://medium.com/' target='_blank'>
          <FaMediumM style={socialStyle} />
        </a>
        <a href='https://twitter.com/' target='_blank'>
          <FaTwitter style={socialStyle} />
        </a>
        <a href='https://t.me/' target='_blank'>
          <FaTelegramPlane style={socialStyle} />
        </a>
      </div>
    </div>
  );
};

export default Social;
