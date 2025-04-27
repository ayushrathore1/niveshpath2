import HeroSection from "@/components/HeroSection";
import CtaSection from "@/components/CtaSection";
import GradientBar from "@/components/ui/gradient-bar";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <GradientBar />
      
      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Welcome to NiveshPath</h2>
            <p className="text-lg mb-8">
              Your journey to financial independence starts here. NiveshPath provides you with 
              the tools, resources, and insights needed to make informed investment decisions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Track</h3>
                <p>Monitor your investments and see your wealth grow over time</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Learn</h3>
                <p>Access educational resources to enhance your financial knowledge</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Grow</h3>
                <p>Get AI-powered recommendations to optimize your portfolio</p>
              </div>
            </div>
            
            <Link href="/features">
              <Button size="lg" className="mx-auto">
                Explore Our Features
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <CtaSection />
    </div>
  );
};

export default Home;
