import Link from 'next/link';
import styles from '../styles/button.module.scss';
import Arrow from '../public/images/shared/arrow.svg';

function Button() {
  return (
    <Link href="/">
      <a className={styles.button}>
        Get An Invite
        <Arrow className={styles.arrow} />
      </a>
    </Link>
  );
}

export default Button;
