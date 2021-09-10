import styles from '../styles/footer.module.scss';
import Logo from '../public/images/shared/logo.svg';
import FacebookIcon from '../public/images/shared/facebook.svg';
import YoutubeIcon from '../public/images/shared/youtube.svg';
import TwitterIcon from '../public/images/shared/twitter.svg';
import PinterestIcon from '../public/images/shared/pinterest.svg';
import InstagramIcon from '../public/images/shared/instagram.svg';
import Nav from './nav';
import Button from './button';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo className={styles.logo} />

      <ul className={styles.socialLinks}>
        <li>
          <a href="https://www.facebook.com">
            <FacebookIcon className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com">
            <YoutubeIcon className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <TwitterIcon className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com">
            <PinterestIcon className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <InstagramIcon className={styles.icon} />
          </a>
        </li>
      </ul>

      <div className={styles.navWrapper}>
        <Nav />
      </div>

      <div className={styles.buttonWrapper}>
        <Button />
      </div>

      <div className={styles.copyText}>
        Copyright 2021. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
