import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // User registration
  app.post("/api/register", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(validatedData);
      // Remove password from response
      const { password, ...userData } = user;
      return res.status(201).json(userData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      return res.status(500).json({ message: "Error creating user" });
    }
  });

  // User login
  app.post("/api/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }

      const user = await storage.getUserByUsername(username);
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

      // In a real implementation, you would set up sessions/JWT here
      const { password: _, ...userData } = user;
      return res.status(200).json(userData);
    } catch (error) {
      return res.status(500).json({ message: "Login failed" });
    }
  });

  // AI Financial Analysis
  // This is a placeholder endpoint that would be replaced with actual AI integration
  app.post("/api/analyze-financial-data", (req, res) => {
    try {
      const { monthlyIncome, monthlyExpenses, investments, riskTolerance, financialGoals } = req.body;

      // Validate input
      if (!monthlyIncome || !monthlyExpenses || !riskTolerance || !financialGoals) {
        return res.status(400).json({ message: "Missing required financial data" });
      }

      // In a real implementation, this would call the AI service
      // For now, return a mock response
      return res.status(200).json({
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
      });
    } catch (error) {
      return res.status(500).json({ message: "Error analyzing financial data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
