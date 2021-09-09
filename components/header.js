import Image from 'next/image';
import styles from '../styles/header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/images/shared/logo-black.svg"
        alt="Photosnap home"
        width="170"
        height="16"
      />
      <Image
        src="/images/shared/menu.svg"
        alt="Open navigation menu"
        width="20"
        height="6"
      />
    </header>
  );
}

export default Header;
