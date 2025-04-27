import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";
import { z } from "zod";
import { db } from '../client/src/lib/db';

// Check if we're in production environment (Vercel)
const isProduction = process.env.NODE_ENV === 'production';

// Function to resolve user authentication in both environments
async function getUserByUsername(username: string) {
  if (isProduction && db) {
    // Use database in production (Vercel)
    try {
      const result = await db.execute(
        `SELECT * FROM users WHERE username = $1 LIMIT 1`,
        [username]
      );
      return result.rows[0] || null;
    } catch (error) {
      console.error("Database query error:", error);
      return null;
    }
  } else {
    // Use in-memory storage in development
    return storage.getUserByUsername(username);
  }
}

// Function to create a user in both environments
async function createUser(userData: any) {
  if (isProduction && db) {
    // Use database in production (Vercel)
    try {
      const { username, password, name, email, gender, mobileNumber, dateOfBirth } = userData;
      const result = await db.execute(
        `INSERT INTO users (username, password, name, email, gender, mobile_number, date_of_birth) 
         VALUES ($1, $2, $3, $4, $5, $6, $7) 
         RETURNING *`,
        [username, password, name || null, email || null, gender || null, mobileNumber || null, dateOfBirth || null]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Database insert error:", error);
      throw error;
    }
  } else {
    // Use in-memory storage in development
    return storage.createUser(userData);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // User registration
  app.post("/api/register", async (req: Request, res: Response) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      const user = await createUser(validatedData);
      
      // Remove password from response
      const { password, ...userData } = user;
      return res.status(201).json(userData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      console.error("Registration error:", error);
      return res.status(500).json({ message: "Error creating user" });
    }
  });

  // User login
  app.post("/api/login", async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }

      const user = await getUserByUsername(username);
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

      // In a real implementation, you would set up sessions/JWT here
      const { password: _, ...userData } = user;
      return res.status(200).json(userData);
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ message: "Login failed" });
    }
  });

  // AI Financial Analysis
  // This is a placeholder endpoint that would be replaced with actual AI integration
  app.post("/api/analyze-financial-data", (req: Request, res: Response) => {
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
      console.error("Analysis error:", error);
      return res.status(500).json({ message: "Error analyzing financial data" });
    }
  });

  // Handle Vercel healthcheck
  app.get("/api/healthcheck", (_req: Request, res: Response) => {
    return res.status(200).json({ status: "ok" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
