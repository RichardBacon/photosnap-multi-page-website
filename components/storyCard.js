import Link from 'next/link';
import styles from '../styles/storyCard.module.scss';
import Arrow from '../public/images/shared/arrow.svg';

function StoryCard({ story }) {
  return (
    <Link href="/">
      <a className={styles.storyLink}>
        <figure className={styles.storyCard}>
          <div className={styles.imageWrapper}>{story.image}</div>

          <div className={styles.content}>
            <figcaption className={styles.figcaption}>
              <h3 className={styles.heading}>{story.heading}</h3>
              <h4 className={styles.author}>{`by ${story.author}`}</h4>
            </figcaption>
            <div className={styles.button}>
              Read Story
              <Arrow className={styles.arrow} />
            </div>
          </div>
        </figure>
      </a>
    </Link>
  );
}

export default StoryCard;
