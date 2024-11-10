import HeroSection from './components/hero';
import About from './components/about';
import Poll from './components/poll';
import Quotes from './components/quotes';

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Poll />
      <Quotes />
    </>
  );
}
