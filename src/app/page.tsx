import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Landing from '@/components/sections/landing';
import AiDilemma from '@/components/sections/ai-dilemma';
import Climate from '@/components/sections/climate';
import Democracy from '@/components/sections/democracy';
import Dialogue from '@/components/sections/dialogue';
import About from '@/components/sections/about';
import Biography from '@/components/sections/biography';
import PressReview from '@/components/sections/press-review';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Landing />
        <AiDilemma />
        <Climate />
        <Democracy />
        <Dialogue />
        <About />
        <Biography />
        <PressReview />
      </main>
      <Footer />
    </div>
  );
}
