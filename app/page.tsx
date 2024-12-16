import HeroSection from './components/hero';
import About from './components/about';
import Story from './components/story';
import Poll from './components/poll';
import Quotes from './components/quotes';
import Stats from './components/stats';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Story />
      <Stats />
      {/* <About /> */}
      <Poll />
      <Quotes />
    </>
  );
}
