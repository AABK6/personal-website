import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AiDilemma from '@/components/sections/ai-dilemma';

export default function AiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <main className="flex-1">
        <AiDilemma />
      </main>
      <Footer />
    </div>
  );
}
