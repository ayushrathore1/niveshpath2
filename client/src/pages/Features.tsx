import FeaturesOverview from "@/components/FeaturesOverview";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Features = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Platform Features</h1>
            <p className="text-lg text-gray-600">
              Discover the powerful tools and resources that NiveshPath offers to help you achieve your financial goals
            </p>
          </div>
        </div>
      </section>
      
      <FeaturesOverview />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Powerful Investment Tools</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Portfolio Analysis</h3>
              <div className="bg-white p-6 rounded-lg shadow">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Real-time portfolio performance tracking</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Risk assessment based on your holdings</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Diversification analysis and recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Benchmark comparison with market indices</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Financial Planning</h3>
              <div className="bg-white p-6 rounded-lg shadow">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Goal-based investment planning</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Retirement calculator with inflation adjustments</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Tax optimization strategies</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Emergency fund planning and debt management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Premium Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Premium Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-50 border-none shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <i className="fas fa-robot text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Our advanced AI analyzes your investment patterns and provides personalized recommendations.
                </p>
                <Link href="/ai">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-none shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <i className="fas fa-bell text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Market Alerts</h3>
                <p className="text-gray-600 mb-4">
                  Get real-time notifications on market changes that impact your portfolio.
                </p>
                <Button variant="outline" className="w-full">Coming Soon</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-none shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <i className="fas fa-users text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Schedule one-on-one consultations with financial advisors for deeper insights.
                </p>
                <Button variant="outline" className="w-full">Coming Soon</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
