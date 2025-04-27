import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-24 text-white">
      <div className="container mx-auto px-4 text-center relative">
        {/* Abstract decoration elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-indigo-500 opacity-10 blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">Financial Freedom</span>
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
            NiveshPath helps you make informed investment decisions and achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pb-16">
            <Link href="/signup">
              <a className="bg-white text-indigo-800 hover:bg-blue-100 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
                Get Started
              </a>
            </Link>
            <Link href="/learn">
              <a className="bg-transparent text-white border-2 border-white hover:bg-indigo-800/20 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Learn More
              </a>
            </Link>
          </div>
        </div>
        
        {/* Floating badge */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
          <div className="bg-white px-6 py-2 rounded-full shadow-lg flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-6 h-6 rounded-full mr-2"></div>
            <span className="font-medium text-gray-800">Premium Financial Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
