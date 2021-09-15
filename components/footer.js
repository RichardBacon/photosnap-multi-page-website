import Link from 'next/link';
import styles from '../styles/footer.module.scss';
import Logo from '../public/images/shared/logo.svg';
import FacebookIcon from '../public/images/shared/facebook.svg';
import YoutubeIcon from '../public/images/shared/youtube.svg';
import TwitterIcon from '../public/images/shared/twitter.svg';
import PinterestIcon from '../public/images/shared/pinterest.svg';
import InstagramIcon from '../public/images/shared/instagram.svg';
import Button from './button';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a>
          <Logo className={styles.logo} />
        </a>
      </Link>

      <ul className={styles.socialLinks}>
        <li>
          <a href="https://www.facebook.com">
            <FacebookIcon className={styles.socialIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com">
            <YoutubeIcon className={styles.socialIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <TwitterIcon className={styles.socialIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com">
            <PinterestIcon className={styles.socialIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <InstagramIcon className={styles.socialIcon} />
          </a>
        </li>
      </ul>

      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">
              <a className={styles.navLink}>Home</a>
            </Link>
          </li>
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
        <Button caption="Get An Invite" style={4} />
      </div>

      <div className={styles.copyText}>
        Copyright 2021. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
