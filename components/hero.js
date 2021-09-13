import styles from '../styles/hero.module.scss';
import Button from './button';

function Hero({ hero, style }) {
  let buttonCaption;
  let buttonStyle;

  if (style === 1) {
    buttonCaption = 'Get An Invite';
    buttonStyle = 4;
  } else {
    buttonCaption = 'View The Stories';
    buttonStyle = 2;
  }

  return (
    <div className={`${styles.hero} ${styles[`heroStyle${style}`]}`}>
      <div className={styles.imageWrapper}>{hero.image}</div>

      <div className={styles.content}>
        <h3 className={styles.heading}>{hero.heading}</h3>
        <p className={styles.description}>{hero.description}</p>
        <Button caption={buttonCaption} style={buttonStyle} />
      </div>
    </div>
  );
}

export default Hero;
