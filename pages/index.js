import Seo from '../components/seo';
import Layout from '../components/layout';
import FeatureSection from '../components/featureSection';
import ResponsiveIcon from '../public/images/features/responsive.svg';
import NoLimitIcon from '../public/images/features/no-limit.svg';
import EmbedIcon from '../public/images/features/embed.svg';

function Home() {
  const features = [
    {
      id: 1,
      heading: '100% Responsive',
      description:
        'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
      icon: <ResponsiveIcon />,
    },
    {
      id: 2,
      heading: 'No Photo Upload Limit',
      description:
        'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
      icon: <NoLimitIcon />,
    },
    {
      id: 3,
      heading: 'Available to Embed',
      description:
        'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
      icon: <EmbedIcon />,
    },
  ];

  return (
    <>
      <Seo />
      <Layout>
        <FeatureSection features={features} />
      </Layout>
    </>
  );
}

export default Home;
