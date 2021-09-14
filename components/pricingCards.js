import styles from '../styles/pricingCards.module.scss';
import PricingCard from './pricingCard';

function PricingCards() {
  return (
    <>
      <div className={styles.pricingToggle}>
        Monthly <span className={styles.toggle}></span>{' '}
        <span className={styles.yearly}>Yearly</span>
      </div>
      <div className={styles.pricingCards}>
        <PricingCard
          pricingCard={{
            heading: 'Basic',
            description:
              'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
            price: '$19.00',
          }}
          style={1}
        />
        <PricingCard
          pricingCard={{
            heading: 'Pro',
            description:
              'More advanced features available. Recommended for photography veterans and professionals.',
            price: '$39.00',
          }}
          style={2}
        />
        <PricingCard
          pricingCard={{
            heading: 'Business',
            description:
              'Additional features available such as more detailed metrics. Recommended for business owners.',
            price: '$99.00',
          }}
          style={1}
        />
      </div>
    </>
  );
}

export default PricingCards;
