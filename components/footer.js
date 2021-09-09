import Image from 'next/image';
import styles from '../styles/footer.module.scss';
import Button from './button';
import Nav from './nav';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        className={styles.logo}
        src="/images/shared/logo-white.svg"
        alt="Photosnap home"
        width="170"
        height="16"
      />

      <ul className={styles.socialLinks}>
        <li>
          <a href="https://www.facebook.com">
            <Image
              src="/images/shared/facebook.svg"
              alt="Facebook"
              width="20"
              height="20"
            />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com">
            <Image
              src="/images/shared/youtube.svg"
              alt="Youtube"
              width="20"
              height="20"
            />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <Image
              src="/images/shared/twitter.svg"
              alt="Twitter"
              width="20"
              height="20"
            />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com">
            <Image
              src="/images/shared/pinterest.svg"
              alt="Pinterest"
              width="20"
              height="20"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <Image
              src="/images/shared/instagram.svg"
              alt="Instagram"
              width="20"
              height="20"
            />
          </a>
        </li>
      </ul>

      <Nav />

      <Button />

      <div className={styles.copyText}>
        Copyright 2021. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
