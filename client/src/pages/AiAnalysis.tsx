import { useState } from "react";
import { FinancialData, FinancialAnalysisResult } from "@/lib/types";
import FinancialAnalysisForm from "@/components/FinancialAnalysisForm";
import FinancialAnalysisResults from "@/components/FinancialAnalysisResults";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">AI-Powered Financial Analysis</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Our advanced AI analyzes your financial data to provide personalized recommendations
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
  );
};

export default AiAnalysis;
