import { useState } from "react";
import { FinancialData, FinancialAnalysisResult } from "@/lib/types";
import FinancialAnalysisForm from "@/components/FinancialAnalysisForm";
import FinancialAnalysisResults from "@/components/FinancialAnalysisResults";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const AiAnalysis = () => {
  const [analysisResults, setAnalysisResults] = useState<FinancialAnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleAnalyze = async (data: FinancialData) => {
    setIsAnalyzing(true);
    
    try {
      // In a real implementation, this would call the API endpoint to get AI analysis
      // For now, we'll simulate a response after a delay
      
      // const response = await apiRequest("POST", "/api/analyze-financial-data", data);
      // const results = await response.json();
      // setAnalysisResults(results);
      
      // Simulate API call
      setTimeout(() => {
        // Mock response for demonstration
        const mockResults: FinancialAnalysisResult = {
          healthScore: 75,
          healthComment: "You're on the right track!",
          recommendedAllocation: {
            stocks: "40",
            mutualFunds: "30",
            fixedDeposits: "20",
            cash: "10"
          },
          investmentOpportunities: [
            "Increase allocation to mid-cap equity mutual funds by 10%",
            "Consider SIP in index funds to reduce exposure to market volatility",
            "Explore tax-saving ELSS funds to optimize tax benefits"
          ],
          personalizedRecommendations: [
            {
              title: "Increase your emergency fund",
              description: "Your current savings can cover 3 months of expenses. Aim for 6 months."
            },
            {
              title: "Optimize retirement contributions",
              description: "Consider increasing your NPS contributions to maximize tax benefits."
            },
            {
              title: "Diversify investment portfolio",
              description: "Your current portfolio is heavily weighted in fixed deposits. Consider diversifying into equity funds."
            }
          ]
        };
        
        setAnalysisResults(mockResults);
        setIsAnalyzing(false);
        
        toast({
          title: "Analysis Complete",
          description: "Your financial profile has been analyzed successfully.",
        });
      }, 2000);
    } catch (error) {
      console.error("Error analyzing financial data:", error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "There was an error analyzing your financial data. Please try again.",
      });
      setIsAnalyzing(false);
    }
  };

  return (
    <div>
      {/* Hero section specifically for AI Analysis */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Financial Analysis</h1>
            <p className="text-lg mb-8">
              Our advanced artificial intelligence analyzes your financial data to provide tailored recommendations 
              that help you optimize your investment strategy and achieve your goals faster.
            </p>
          </div>
        </div>
      </section>
      
      {/* How it works section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Enter Your Data</h3>
              <p className="text-gray-600">
                Provide information about your income, expenses, current investments, and financial goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI examines your financial profile and compares it with successful patterns
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized insights and actionable steps to improve your financial health
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Analysis Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Start Your Analysis</h2>
            <p className="text-center mb-12 max-w-2xl mx-auto">
              Fill in the form below to receive your personalized financial recommendations
            </p>
            
            <FinancialAnalysisForm onSubmit={handleAnalyze} />
            
            {isAnalyzing && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                  <div className="h-20 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
                </div>
                <p className="mt-4 text-gray-600">Analyzing your financial profile...</p>
              </div>
            )}
            
            {!isAnalyzing && analysisResults && (
              <FinancialAnalysisResults results={analysisResults} />
            )}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      {!analysisResults && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-12 text-center">What Our Users Say</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-gray-50 border-none">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Rahul M.</h4>
                      <p className="text-sm text-gray-500">Tech Professional</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The AI analysis helped me identify gaps in my investment strategy that I wasn't aware of. 
                    I've adjusted my portfolio based on the recommendations and seen better returns."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-50 border-none">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Priya S.</h4>
                      <p className="text-sm text-gray-500">Small Business Owner</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "I was skeptical about AI advice, but the recommendations were spot on. 
                    The suggestions for tax optimization alone saved me thousands this year."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-50 border-none">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Amit K.</h4>
                      <p className="text-sm text-gray-500">Medical Professional</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The personalized recommendations helped me rebalance my portfolio and plan better for retirement. 
                    The interface is intuitive and the insights are genuinely useful."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AiAnalysis;
