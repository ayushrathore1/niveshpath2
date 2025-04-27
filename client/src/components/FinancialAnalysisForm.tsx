import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FinancialData } from "@/lib/types";

interface FinancialAnalysisFormProps {
  onSubmit: (data: FinancialData) => void;
}

const financialFormSchema = z.object({
  monthlyIncome: z.string().min(1, "Monthly income is required"),
  monthlyExpenses: z.string().min(1, "Monthly expenses is required"),
  stocksInvestment: z.string().optional(),
  mutualFundsInvestment: z.string().optional(),
  fixedDepositsInvestment: z.string().optional(),
  riskTolerance: z.string().min(1, "Risk tolerance is required"),
  financialGoals: z.string().min(10, "Please describe your financial goals in more detail"),
});

const FinancialAnalysisForm: React.FC<FinancialAnalysisFormProps> = ({ onSubmit }) => {
  const form = useForm<z.infer<typeof financialFormSchema>>({
    resolver: zodResolver(financialFormSchema),
    defaultValues: {
      monthlyIncome: "",
      monthlyExpenses: "",
      stocksInvestment: "",
      mutualFundsInvestment: "",
      fixedDepositsInvestment: "",
      riskTolerance: "moderate",
      financialGoals: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof financialFormSchema>) => {
    const formattedData: FinancialData = {
      monthlyIncome: values.monthlyIncome,
      monthlyExpenses: values.monthlyExpenses,
      investments: {
        stocks: values.stocksInvestment || "0",
        mutualFunds: values.mutualFundsInvestment || "0",
        fixedDeposits: values.fixedDepositsInvestment || "0",
      },
      riskTolerance: values.riskTolerance,
      financialGoals: values.financialGoals,
    };
    
    onSubmit(formattedData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Financial Profile Analysis</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="monthlyIncome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Income</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">₹</span>
                      </div>
                      <Input
                        placeholder="50,000"
                        className="pl-8"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="monthlyExpenses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Expenses</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">₹</span>
                      </div>
                      <Input
                        placeholder="30,000"
                        className="pl-8"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Investments</label>
            <div className="grid md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="stocksInvestment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs text-gray-500">Stocks</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">₹</span>
                        </div>
                        <Input
                          placeholder="100,000"
                          className="pl-8"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="mutualFundsInvestment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs text-gray-500">Mutual Funds</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">₹</span>
                        </div>
                        <Input
                          placeholder="250,000"
                          className="pl-8"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="fixedDepositsInvestment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs text-gray-500">Fixed Deposits</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">₹</span>
                        </div>
                        <Input
                          placeholder="150,000"
                          className="pl-8"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <FormField
            control={form.control}
            name="riskTolerance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Risk Tolerance</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your risk tolerance" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="conservative">Conservative (Low Risk)</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="aggressive">Aggressive (High Risk)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="financialGoals"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Financial Goals</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Retirement in 20 years, children's education, buying a house, etc."
                    className="resize-none"
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex justify-center">
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Analyze My Financial Profile
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FinancialAnalysisForm;
