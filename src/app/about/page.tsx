import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import About from '@/components/sections/about';
import Biography from '@/components/sections/biography';
import KeyContributions from '@/components/sections/key-contributions';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <About />
        <Biography />
        <KeyContributions />
      </main>
      <Footer />
    </div>
  );
}
