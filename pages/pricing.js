import Image from 'next/image';
import Seo from '../components/seo';
import Layout from '../components/layout';
import Hero from '../components/hero';
import PricingCards from '../components/pricingCards';
import PricingChart from '../components/pricingChart';

function Pricing() {
  return (
    <>
      <Seo />
      <Layout>
        <Hero
          hero={{
            heading: 'Pricing',
            description:
              'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
            image: (
              <Image
                src="/images/pricing/pricing1660x980.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="A silouette of a woman using a camera on a tripod"
              />
            ),
          }}
          style={1}
        />
        <PricingCards />
        <PricingChart />
      </Layout>
    </>
  );
}

export default Pricing;
