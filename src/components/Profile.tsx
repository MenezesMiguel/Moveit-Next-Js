/* eslint-disable @next/next/no-img-element */
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/MenezesMiguel.png" alt="Landscape picture" />
      <div>
          <strong>Miguel Menezes</strong>
          <p>
              <img src="icons/level.svg" alt="Level"/>
              Level 1
              </p>
      </div>
    </div>
  );
}
