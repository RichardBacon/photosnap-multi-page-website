import styles from '../styles/featureStory.module.scss';
import Button from './button';

function FeatureStory({ featureStory }) {
  return (
    <div className={styles.featureStory}>
      <div className={styles.imageWrapper}>{featureStory.image}</div>

      <div className={styles.content}>
        <p className={styles.featured}>Last Months Featured Story</p>
        <h1 className={styles.heading}>{featureStory.heading}</h1>
        <p className={styles.details}>
          {featureStory.date}
          <span className={styles.author}>by {featureStory.author}</span>
        </p>
        <p className={styles.description}>{featureStory.description}</p>
        <Button caption="Read The Story" style={4} />
      </div>
    </div>
  );
}

export default FeatureStory;
