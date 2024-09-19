import HeroSection from './components/hero';
import About from './components/about';
import DailyRetreat from './components/daily-retreat';
import Quotes from './components/quotes';

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <DailyRetreat />
      <Quotes />
    </>
  );
}
