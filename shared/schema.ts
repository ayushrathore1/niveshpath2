import { pgTable, text, serial, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
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

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertFinancialProfileSchema = createInsertSchema(financialProfiles).omit({
  id: true,
  createdAt: true,
});

export const insertFinancialAnalysisSchema = createInsertSchema(financialAnalysis).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertFinancialProfile = z.infer<typeof insertFinancialProfileSchema>;
export type FinancialProfile = typeof financialProfiles.$inferSelect;

export type InsertFinancialAnalysis = z.infer<typeof insertFinancialAnalysisSchema>;
export type FinancialAnalysis = typeof financialAnalysis.$inferSelect;
