import Link from 'next/link';
import styles from '../styles/header.module.scss';
import Logo from '../public/images/shared/logo.svg';
import MenuIcon from '../public/images/shared/menu.svg';
import Button from './button';

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo className={styles.logo} />
        </a>
      </Link>

      <div className={styles.menuIconWrapper}>
        <MenuIcon />
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/stories">
              <a className={styles.navLink}>Stories</a>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <a className={styles.navLink}>Features</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a className={styles.navLink}>Pricing</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.buttonWrapper}>
        <Button caption="Get An Invite" style={1} />
      </div>
    </header>
  );
}

export default Header;
