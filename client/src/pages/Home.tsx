import HeroSection from "@/components/HeroSection";
import FeaturesOverview from "@/components/FeaturesOverview";
import CtaSection from "@/components/CtaSection";
import GradientBar from "@/components/ui/gradient-bar";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <GradientBar />
      <FeaturesOverview />
      <CtaSection />
    </div>
  );
};

export default Home;
