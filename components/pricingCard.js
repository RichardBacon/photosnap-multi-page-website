import styles from '../styles/pricingCard.module.scss';
import Button from './button';

function PricingCard({ pricingCard, style }) {
  const buttonStyle = style === 1 ? 1 : 3;
  return (
    <div
      className={`${styles.pricingCard} ${styles[`pricingCardStyle${style}`]}`}
    >
      <h3 className={styles.heading}>{pricingCard.heading}</h3>
      <p className={styles.description}>{pricingCard.description}</p>
      <p className={styles.price}>
        {pricingCard.price} <span className={styles.pricePer}>per month</span>
      </p>

      <Button caption="Pick Plan" style={buttonStyle} />
    </div>
  );
}

export default PricingCard;
