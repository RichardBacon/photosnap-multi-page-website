import Logo from '../public/images/shared/logo.svg';
import MenuIcon from '../public/images/shared/menu.svg';
import styles from '../styles/header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <MenuIcon />
    </header>
  );
}

export default Header;
