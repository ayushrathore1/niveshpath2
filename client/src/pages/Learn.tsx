import { Button } from "@/components/ui/button";
import LearnResourceCard, { LearnResource } from "@/components/LearnResourceCard";

const Learn = () => {
  const resources: LearnResource[] = [
    {
      id: "investment-fundamentals",
      category: "Basics",
      title: "Investment Fundamentals",
      description: "Learn the basic principles of investing and how to build a solid foundation.",
      imageUrl: "https://images.unsplash.com/photo-1642543348745-718721dc37ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "stock-market-strategies",
      category: "Stocks",
      title: "Stock Market Strategies",
      description: "Discover effective strategies for investing in the stock market.",
      imageUrl: "https://images.unsplash.com/photo-1590283603385-c2c77adc8146?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "retirement-planning",
      category: "Planning",
      title: "Retirement Planning",
      description: "How to prepare for a comfortable retirement through smart investing.",
      imageUrl: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Financial Education</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Expand your financial knowledge with our curated resources
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <LearnResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90">
            Browse All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Learn;
