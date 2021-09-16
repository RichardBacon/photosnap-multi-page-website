import Image from 'next/image';
import Seo from '../components/seo';
import Layout from '../components/layout';
import StoryCards from '../components/storyCards';
import FeatureStory from '../components/featureStory';

function Stories() {
  const stories = [
    {
      id: 1,
      heading: 'The Mountains',
      author: 'John Appleseed',
      image: (
        <Image
          src="/images/stories/mountains720x1000.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
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
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
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
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
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
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
          alt="A cylindrical shaped building made of many bronze panels"
        />
      ),
    },
    {
      id: 5,
      heading: 'World Tour 2019',
      author: 'Timothy Wagner',
      image: (
        <Image
          src="/images/stories/world-tour720x1000.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
          alt="A lake between large mountains and a cloudy sky"
        />
      ),
    },
    {
      id: 6,
      heading: 'Unforeseen Corners',
      author: 'William Malcolm',
      image: (
        <Image
          src="/images/stories/unforeseen720x1000.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
          alt="A tree with sunlight shining through the branches"
        />
      ),
    },
    {
      id: 7,
      heading: 'King of Africa',
      author: 'Tim Hillengurg',
      image: (
        <Image
          src="/images/stories/king-of-africa720x1000.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
          alt="Close up of a lions face"
        />
      ),
    },
    {
      id: 8,
      heading: 'The Trip To Nowhere',
      author: 'Felicia Rourke',
      image: (
        <Image
          src="/images/stories/nowhere720x1000.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
          alt="A solitary tree standing on the edge of a lake"
        />
      ),
    },
    {
      id: 9,
      heading: 'Rage of the Sea',
      author: 'Mohammed Abdul',
      image: (
        <Image
          src="/images/stories/sea720x1000.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
          alt="A rough sea with high waves beneath a setting sun"
        />
      ),
    },
    {
      id: 10,
      heading: 'Running Free',
      author: 'Michelle Petit',
      image: (
        <Image
          src="/images/stories/running-free720x1000.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
          alt="Two grey horses running through the mist"
        />
      ),
    },
    {
      id: 11,
      heading: 'Behind the waves',
      author: 'Lamarr Wilson',
      image: (
        <Image
          src="/images/stories/waves720x1000.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
          alt="A huge wave with white surf"
        />
      ),
    },
    {
      id: 12,
      heading: 'Calm Waters',
      author: 'Samantha Brooke',
      image: (
        <Image
          src="/images/stories/calm-waters720x1000.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
          alt="A calm lake with green hills in the background"
        />
      ),
    },
    {
      id: 13,
      heading: 'The Milky Way',
      author: 'Benjamin Cruz',
      image: (
        <Image
          src="/images/stories/milky-way720x1000.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
          alt="The Milky Way galaxy as seen from space"
        />
      ),
    },
    {
      id: 14,
      heading: 'Night at the Dark Forest',
      author: 'Mohammed Abdul',
      image: (
        <Image
          src="/images/stories/dark-forest720x1000.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
          alt="A flat rocky mountain covered in snow beneath a star lit night sky"
        />
      ),
    },
    {
      id: 15,
      heading: 'Somwarpets Beauty',
      author: 'Michelle Petit',
      image: (
        <Image
          src="/images/stories/somwarpet720x1000.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
          alt="A wild flower with a grren stem and leaves and yellow petals"
        />
      ),
    },
    {
      id: 16,
      heading: 'Land of Dreams',
      author: 'William Malcolm',
      image: (
        <Image
          src="/images/stories/land-of-dreams720x1000.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw"
          alt="A small church lit with orange light with a huge snow covered mountain in the background"
        />
      ),
    },
  ];

  return (
    <>
      <Seo />
      <Layout>
        <FeatureStory
          featureStory={{
            heading: 'Hazy Full Moon of Appalachia',
            date: 'March 2nd 2020',
            author: 'John Appleseed',
            description:
              'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
            image: (
              <Image
                src="/images/stories/appalacia2878x1300.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="The Appalacian mountains on a dusky moon lit night"
              />
            ),
          }}
        />
        <StoryCards stories={stories} />
      </Layout>
    </>
  );
}

export default Stories;
