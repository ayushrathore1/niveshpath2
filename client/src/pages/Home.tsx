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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Welcome to NiveshPath</h2>
            <p className="text-lg mb-10 text-gray-700">
              Your journey to financial independence starts here. NiveshPath provides you with 
              the tools, resources, and insights needed to make informed investment decisions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
              <div className="bg-gradient-to-b from-white to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full">
                  <i className="fas fa-chart-line text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Track</h3>
                <p className="text-gray-600">Monitor your investments and see your wealth grow over time</p>
              </div>
              
              <div className="bg-gradient-to-b from-white to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full">
                  <i className="fas fa-lightbulb text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Learn</h3>
                <p className="text-gray-600">Access educational resources to enhance your financial knowledge</p>
              </div>
              
              <div className="bg-gradient-to-b from-white to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full">
                  <i className="fas fa-brain text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Grow</h3>
                <p className="text-gray-600">Get AI-powered recommendations to optimize your portfolio</p>
              </div>
            </div>
            
            <Link href="/features">
              <div className="gradient-primary inline-block px-8 py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer">
                Explore Our Features
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Premium Banner */}
      <div className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Premium Investment Insights
                </h3>
                <p className="text-gray-600 mb-6">
                  Access personalized investment strategies backed by data-driven analysis and expert recommendations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mr-3 flex items-center justify-center text-white text-xs">
                      <i className="fas fa-check"></i>
                    </div>
                    <span>Portfolio risk assessment</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mr-3 flex items-center justify-center text-white text-xs">
                      <i className="fas fa-check"></i>
                    </div>
                    <span>Asset allocation recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mr-3 flex items-center justify-center text-white text-xs">
                      <i className="fas fa-check"></i>
                    </div>
                    <span>Retirement planning tools</span>
                  </li>
                </ul>
                <Link href="/ai">
                  <div className="gradient-secondary inline-block px-6 py-2 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all cursor-pointer">
                    Try AI Analysis
                  </div>
                </Link>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-12 text-white flex items-center">
                <div>
                  <h4 className="text-xl font-bold mb-4">Smart investing, made simple</h4>
                  <p className="mb-6 text-blue-100">
                    Our AI-powered platform analyzes your financial profile and provides tailored investment recommendations to help you reach your goals faster.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
                    <div>
                      <p className="font-medium">"The analysis provided exceptional insights for my portfolio."</p>
                      <p className="text-sm text-blue-200">- Rajesh M., Tech Professional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CtaSection />
    </div>
  );
};

export default Home;
