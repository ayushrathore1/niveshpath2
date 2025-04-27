import { Button } from "@/components/ui/button";
import { FinancialAnalysisResult } from "@/lib/types";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface FinancialAnalysisResultsProps {
  results: FinancialAnalysisResult;
}

const FinancialAnalysisResults: React.FC<FinancialAnalysisResultsProps> = ({ results }) => {
  const pieChartData = [
    { name: "Stocks", value: parseInt(results.recommendedAllocation.stocks) },
    { name: "Mutual Funds", value: parseInt(results.recommendedAllocation.mutualFunds) },
    { name: "Fixed Deposits", value: parseInt(results.recommendedAllocation.fixedDeposits) },
    { name: "Cash", value: parseInt(results.recommendedAllocation.cash) },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Your Financial Analysis</h3>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Current Financial Health</h4>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-green-500 h-2.5 rounded-full" 
            style={{ width: `${results.healthScore}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Your financial health score is {results.healthScore}/100. {results.healthComment}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-medium mb-3">Recommended Asset Allocation</h4>
          <div className="bg-gray-50 p-4 rounded">
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Investment Opportunities</h4>
          <ul className="space-y-2">
            {results.investmentOpportunities.map((opportunity, index) => (
              <li key={index} className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>{opportunity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-3">Personalized Recommendations</h4>
        <p className="mb-4">
          Based on your financial goals and risk tolerance, we recommend the following strategy:
        </p>
        <div className="bg-gray-50 p-4 rounded">
          <ul className="space-y-3">
            {results.personalizedRecommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <i className="fas fa-chart-line text-primary mt-1 mr-2"></i>
                <div>
                  <span className="font-medium">{recommendation.title}</span>
                  <p className="text-sm text-gray-600">{recommendation.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="text-center">
        <Button className="bg-primary hover:bg-primary/90">
          Get Detailed Analysis Report
        </Button>
      </div>
    </div>
  );
};

export default FinancialAnalysisResults;
