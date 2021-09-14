import styles from '../styles/storyCards.module.scss';
import StoryCard from './storyCard';

function StoryCards({ stories }) {
  return (
    <div className={styles.storyCards}>
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
}

export default StoryCards;
