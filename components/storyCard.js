import styles from '../styles/storyCard.module.scss';
import Button from './button';

function StoryCard({ story }) {
  return (
    <figure className={styles.storyCard}>
      <div className={styles.imageWrapper}>{story.image}</div>

      <div className={styles.content}>
        <figcaption className={styles.figcaption}>
          <h3 className={styles.heading}>{story.heading}</h3>
          <h4 className={styles.author}>{`by ${story.author}`}</h4>
        </figcaption>

        <Button caption="Read Story" style={4} />
      </div>
    </figure>
  );
}

export default StoryCard;
