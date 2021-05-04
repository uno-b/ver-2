import React from 'react';

import img from '../../images/NFT.webp';
import img2 from '../../images/NFT.png';
import * as styles from './Information.module.scss';

const Information = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h2>Cross platform playable NFT’s</h2>
          <p>
            The first multiplayer online battleground with cross platform NTF’s
            all playable in a five versus five strategic battleground. Battle
            your way to victory, rank up and earn coins. Trade NFT’s, play NFT’s
            all through one platform.
          </p>
        </div>
        <div className={styles.image}>
          <picture>
            <source srcset={img} type='image/webp'></source>
            <source srcset={img2} type='image/png'></source>
            <img src={img} alt='' />
          </picture>
          <div className={styles.fade} />
        </div>
      </div>
    </div>
  );
};

export default Information;
