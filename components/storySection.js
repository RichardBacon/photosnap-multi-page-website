import styles from '../styles/storySection.module.scss';
import Story from './story';

function StorySection({ stories }) {
  return (
    <div className={styles.storySection}>
      {stories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
}

export default StorySection;
