import Link from 'next/link';
import styles from '../styles/button.module.scss';
import Arrow from '../public/images/shared/arrow.svg';

function Button({ caption, style }) {
  return (
    <Link href="/">
      <a className={`${styles.button} ${styles[`buttonStyle${style}`]}`}>
        {caption}
        <Arrow className={styles.arrow} />
      </a>
    </Link>
  );
}

export default Button;
