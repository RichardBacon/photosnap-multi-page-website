import Image from 'next/image';
import Seo from '../components/seo';
import Layout from '../components/layout';
import StorySection from '../components/storySection';
import FeatureSection from '../components/featureSection';
import Hero from '../components/hero';
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
        <Hero
          hero={{
            heading: 'Create and Share Your Photo Stories.',
            description:
              'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
            image: (
              <Image
                src="/images/home/create-and-share1660x1300.jpg"
                layout="fill"
                width="1660"
                height="1300"
                objectFit="cover"
                objectPosition="center"
                alt="A man with a camera standing on a jetty looking out across a lake"
              />
            ),
          }}
          style={1}
        />

        <Hero
          hero={{
            heading: 'Beautiful Stories every time',
            description:
              'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
            image: (
              <Image
                src="/images/home/beautiful-stories1660x1300.jpg"
                layout="fill"
                width="1660"
                height="1300"
                objectFit="cover"
                objectPosition="center"
                alt="A man with a camera standing on a jetty looking out across a lake"
              />
            ),
          }}
          style={2}
        />

        <Hero
          hero={{
            heading: 'Designed For Everyone',
            description:
              'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
            image: (
              <Image
                src="/images/home/designed-for-everyone1660x1300.jpg"
                layout="fill"
                width="1660"
                height="1300"
                objectFit="cover"
                objectPosition="center"
                alt="A man with a camera standing on a jetty looking out across a lake"
              />
            ),
          }}
          style={3}
        />

        <StorySection stories={stories} />
        <FeatureSection features={features} />
      </Layout>
    </>
  );
}

export default Home;
