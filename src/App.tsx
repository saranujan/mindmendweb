import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import StatsSection from './components/StatsSection';
import TestimonialSection from './components/TestimonialSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <TestimonialSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;