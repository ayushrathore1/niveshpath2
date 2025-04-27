import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Path to Financial Freedom</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          NiveshPath helps you make informed investment decisions and achieve your financial goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
          <Link href="/learn">
            <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-gray-50">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
