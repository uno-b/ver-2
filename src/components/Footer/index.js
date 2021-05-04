import React from 'react';

import * as styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        &copy; 2021 All Rights Reserved by Uno
      </div>
    </div>
  );
};

export default Footer;
