import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/button.module.scss';

function Button() {
  return (
    <Link href="/">
      <a className={styles.button}>
        Get An Invite
        <Image
          src="/images/shared/arrow.svg"
          alt="Get an invite"
          width="42"
          height="12"
        />
      </a>
    </Link>
  );
}

export default Button;
