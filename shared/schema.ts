import { pgTable, text, serial, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Define our schemas directly with Zod to avoid PostgreSQL dependency in production
export const userSchema = z.object({
  id: z.number(),
  username: z.string(),
  password: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  gender: z.string().optional(),
  mobileNumber: z.string().optional(),
  dateOfBirth: z.string().optional(),
});

export const financialProfileSchema = z.object({
  id: z.number(),
  userId: z.number(),
  monthlyIncome: z.string(),
  monthlyExpenses: z.string(),
  investments: z.record(z.any()),
  riskTolerance: z.string(),
  financialGoals: z.string(),
  createdAt: z.string(),
});

export const financialAnalysisSchema = z.object({
  id: z.number(),
  profileId: z.number(),
  healthScore: z.number(),
  recommendedAllocation: z.record(z.any()),
  investmentOpportunities: z.array(z.any()),
  personalizedRecommendations: z.array(z.record(z.any())),
  createdAt: z.string(),
});

// Define PostgreSQL tables for local development and migrations
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  name: text("name"),
  email: text("email"),
  gender: text("gender"),
  mobileNumber: text("mobile_number"),
  dateOfBirth: text("date_of_birth"),
});

export const financialProfiles = pgTable("financial_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  monthlyIncome: text("monthly_income").notNull(),
  monthlyExpenses: text("monthly_expenses").notNull(),
  investments: jsonb("investments").notNull(),
  riskTolerance: text("risk_tolerance").notNull(),
  financialGoals: text("financial_goals").notNull(),
  createdAt: text("created_at").notNull(),
});

export const financialAnalysis = pgTable("financial_analysis", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").notNull().references(() => financialProfiles.id),
  healthScore: integer("health_score").notNull(),
  recommendedAllocation: jsonb("recommended_allocation").notNull(),
  investmentOpportunities: jsonb("investment_opportunities").notNull(),
  personalizedRecommendations: jsonb("personalized_recommendations").notNull(),
  createdAt: text("created_at").notNull(),
});

// Use the Zod schemas for insertion validation
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  gender: z.string().optional(),
  mobileNumber: z.string().optional(),
  dateOfBirth: z.string().optional(),
});

export const insertFinancialProfileSchema = z.object({
  userId: z.number(),
  monthlyIncome: z.string(),
  monthlyExpenses: z.string(),
  investments: z.record(z.any()),
  riskTolerance: z.string(),
  financialGoals: z.string(),
});

export const insertFinancialAnalysisSchema = z.object({
  profileId: z.number(),
  healthScore: z.number(),
  recommendedAllocation: z.record(z.any()),
  investmentOpportunities: z.array(z.any()),
  personalizedRecommendations: z.array(z.record(z.any())),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = z.infer<typeof userSchema>;

export type InsertFinancialProfile = z.infer<typeof insertFinancialProfileSchema>;
export type FinancialProfile = z.infer<typeof financialProfileSchema>;

export type InsertFinancialAnalysis = z.infer<typeof insertFinancialAnalysisSchema>;
export type FinancialAnalysis = z.infer<typeof financialAnalysisSchema>;
