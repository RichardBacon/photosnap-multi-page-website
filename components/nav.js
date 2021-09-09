import Link from 'next/link';
import styles from '../styles/nav.module.scss';

function Nav() {
  return (
    <nav>
      <ul className={styles.links}>
        <li>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/stories">
            <a className={styles.link}>Stories</a>
          </Link>
        </li>
        <li>
          <Link href="/features">
            <a className={styles.link}>Features</a>
          </Link>
        </li>
        <li>
          <Link href="/pricing">
            <a className={styles.link}>Pricing</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
