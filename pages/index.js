import Image from 'next/image';
import Seo from '../components/seo';
import Layout from '../components/layout';
import StorySection from '../components/storySection';
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

  const stories = [
    {
      id: 1,
      heading: 'The Mountains',
      author: 'John Appleseed',
      image: (
        <Image
          src="/images/stories/mountains720x1000.jpg"
          layout="fill"
          width="720"
          height="1000"
          objectFit="cover"
          objectPosition="center"
          alt="A huge white mountain top surrounded by clouds"
        />
      ),
    },
    {
      id: 2,
      heading: 'Sunset Cityscapes',
      author: 'Benjamin Cruz',
      image: (
        <Image
          src="/images/stories/cityscapes720x1000.jpg"
          layout="fill"
          width="720"
          height="1000"
          objectFit="cover"
          objectPosition="center"
          alt="Aerial view of a city at dusk with the sun setting"
        />
      ),
    },
    {
      id: 3,
      heading: '18 Days Voyage',
      author: 'Alexei Borodin',
      image: (
        <Image
          src="/images/stories/18-days-voyage720x1000.jpg"
          layout="fill"
          width="720"
          height="1000"
          objectFit="cover"
          objectPosition="center"
          alt="Silouette of a man walking with the sun setting behind him"
        />
      ),
    },
    {
      id: 4,
      heading: 'Architecturals',
      author: 'Samantha Brooke',
      image: (
        <Image
          src="/images/stories/architecturals720x1000.jpg"
          layout="fill"
          width="720"
          height="1000"
          objectFit="cover"
          objectPosition="center"
          alt="A cylindrical shaped building made of many bronze panels"
        />
      ),
    },
  ];

  return (
    <>
      <Seo />
      <Layout>
        <StorySection stories={stories} />
        <FeatureSection features={features} />
      </Layout>
    </>
  );
}

export default Home;
