import styles from '../styles/featureSection.module.scss';
import Feature from './feature';

function FeatureSection({ features }) {
  return (
    <div className={styles.featureSection}>
      {features.map((feature) => (
        <Feature key={feature.id} feature={feature} />
      ))}
    </div>
  );
}

export default FeatureSection;
