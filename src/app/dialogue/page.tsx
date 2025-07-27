import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Dialogue from '@/components/sections/dialogue';

export default function DialoguePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Dialogue />
      </main>
      <Footer />
    </div>
  );
}
