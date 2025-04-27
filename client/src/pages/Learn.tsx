import { Button } from "@/components/ui/button";
import LearnResourceCard, { LearnResource } from "@/components/LearnResourceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Learn = () => {
  const basicResources: LearnResource[] = [
    {
      id: "investment-fundamentals",
      category: "Basics",
      title: "Investment Fundamentals",
      description: "Learn the basic principles of investing and how to build a solid foundation.",
      imageUrl: "https://images.unsplash.com/photo-1642543348745-718721dc37ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "personal-finance-101",
      category: "Basics",
      title: "Personal Finance 101",
      description: "Essential knowledge for managing your money and building wealth over time.",
      imageUrl: "https://images.unsplash.com/photo-1586486855514-8c637a7b766b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "budgeting-essentials",
      category: "Basics",
      title: "Budgeting Essentials",
      description: "Techniques for creating and maintaining a budget that works for your lifestyle.",
      imageUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const stockResources: LearnResource[] = [
    {
      id: "stock-market-strategies",
      category: "Stocks",
      title: "Stock Market Strategies",
      description: "Discover effective strategies for investing in the stock market.",
      imageUrl: "https://images.unsplash.com/photo-1590283603385-c2c77adc8146?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "stock-analysis",
      category: "Stocks",
      title: "Fundamental Analysis",
      description: "How to analyze company financials and make informed investment decisions.",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "technical-analysis",
      category: "Stocks",
      title: "Technical Analysis",
      description: "Using charts and patterns to time your stock market investments better.",
      imageUrl: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const planningResources: LearnResource[] = [
    {
      id: "retirement-planning",
      category: "Planning",
      title: "Retirement Planning",
      description: "How to prepare for a comfortable retirement through smart investing.",
      imageUrl: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tax-planning",
      category: "Planning",
      title: "Tax Planning",
      description: "Strategies to optimize your investments for tax efficiency and savings.",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "estate-planning",
      category: "Planning",
      title: "Estate Planning",
      description: "Ensuring your wealth and assets are protected and transferred according to your wishes.",
      imageUrl: "https://images.unsplash.com/photo-1563804447127-21e22250e4b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Financial Education</h1>
            <p className="text-lg mb-4">
              Expand your financial knowledge with our curated resources
            </p>
            <p className="text-gray-600">
              Whether you're just starting out or looking to deepen your investment knowledge, 
              we have resources to help you on your financial journey.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="basics">Investment Basics</TabsTrigger>
                <TabsTrigger value="stocks">Stock Market</TabsTrigger>
                <TabsTrigger value="planning">Financial Planning</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...basicResources, ...stockResources, ...planningResources].slice(0, 6).map((resource) => (
                  <LearnResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="basics">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {basicResources.map((resource) => (
                  <LearnResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="stocks">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stockResources.map((resource) => (
                  <LearnResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="planning">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {planningResources.map((resource) => (
                  <LearnResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90">
              Browse All Resources
            </Button>
          </div>
        </div>
      </section>
      
      {/* Learning Paths Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Learning Paths</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Follow our structured learning paths to systematically build your financial knowledge
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <i className="fas fa-user-graduate text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Beginner Path</h3>
              <p className="text-gray-600 mb-4">
                Start your investment journey with fundamental concepts and basic strategies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>Personal Finance Fundamentals</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>Understanding Risk & Return</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>Getting Started with Mutual Funds</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Start Learning</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Intermediate Path</h3>
              <p className="text-gray-600 mb-4">
                Deepen your knowledge with advanced concepts and diversification strategies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>Portfolio Construction</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>Stock Valuation Methods</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>Tax-Efficient Investing</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Start Learning</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <i className="fas fa-trophy text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Path</h3>
              <p className="text-gray-600 mb-4">
                Master complex strategies and optimize your portfolio for long-term growth.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>Advanced Asset Allocation</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>Alternative Investment Strategies</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>Wealth Preservation Techniques</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Start Learning</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
