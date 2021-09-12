import styles from '../styles/feature.module.scss';

function Feature({ feature }) {
  return (
    <div className={styles.feature}>
      <div className={styles.iconWrapper}>{feature.icon}</div>
      <h3 className={styles.heading}>{feature.heading}</h3>
      <p className={styles.description}>{feature.description}</p>
    </div>
  );
}

export default Feature;
