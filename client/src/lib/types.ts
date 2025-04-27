export interface FinancialData {
  monthlyIncome: string;
  monthlyExpenses: string;
  investments: {
    stocks: string;
    mutualFunds: string;
    fixedDeposits: string;
  };
  riskTolerance: string;
  financialGoals: string;
}

export interface FinancialAnalysisResult {
  healthScore: number;
  healthComment: string;
  recommendedAllocation: {
    stocks: string;
    mutualFunds: string;
    fixedDeposits: string;
    cash: string;
  };
  investmentOpportunities: string[];
  personalizedRecommendations: {
    title: string;
    description: string;
  }[];
}
