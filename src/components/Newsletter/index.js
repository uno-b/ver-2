import React from 'react';

import { FiMail } from 'react-icons/fi';
import * as styles from './Newsletter.module.scss';

const Newsletter = () => {
  return (
    <div className={styles.container} id='newsletter'>
      <div className={styles.wrapper}>
        <h2>BE THE FIRST TO KNOW WHEN WE LAUNCH</h2>
        <form action='https://formspree.io/f/xrgrezgy'>
          <FiMail />
          <input type='text' placeholder='Enter Your Email Address' />
          <input type='submit' value='Subscribe' />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
