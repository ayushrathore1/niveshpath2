import { type User, type InsertUser, type FinancialProfile, type InsertFinancialProfile, type FinancialAnalysis, type InsertFinancialAnalysis } from "@shared/schema";

// Modify the interface with needed CRUD methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Financial Profile methods
  getFinancialProfile(id: number): Promise<FinancialProfile | undefined>;
  getFinancialProfileByUserId(userId: number): Promise<FinancialProfile | undefined>;
  createFinancialProfile(profile: InsertFinancialProfile): Promise<FinancialProfile>;
  
  // Financial Analysis methods
  getFinancialAnalysis(id: number): Promise<FinancialAnalysis | undefined>;
  getFinancialAnalysisByProfileId(profileId: number): Promise<FinancialAnalysis | undefined>;
  createFinancialAnalysis(analysis: InsertFinancialAnalysis): Promise<FinancialAnalysis>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private financialProfiles: Map<number, FinancialProfile>;
  private financialAnalyses: Map<number, FinancialAnalysis>;
  private userId: number;
  private profileId: number;
  private analysisId: number;

  constructor() {
    this.users = new Map();
    this.financialProfiles = new Map();
    this.financialAnalyses = new Map();
    this.userId = 1;
    this.profileId = 1;
    this.analysisId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }
  
  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Financial Profile methods
  async getFinancialProfile(id: number): Promise<FinancialProfile | undefined> {
    return this.financialProfiles.get(id);
  }
  
  async getFinancialProfileByUserId(userId: number): Promise<FinancialProfile | undefined> {
    return Array.from(this.financialProfiles.values()).find(
      (profile) => profile.userId === userId,
    );
  }
  
  async createFinancialProfile(insertProfile: InsertFinancialProfile): Promise<FinancialProfile> {
    const id = this.profileId++;
    const createdAt = new Date().toISOString();
    const profile: FinancialProfile = { ...insertProfile, id, createdAt };
    this.financialProfiles.set(id, profile);
    return profile;
  }
  
  // Financial Analysis methods
  async getFinancialAnalysis(id: number): Promise<FinancialAnalysis | undefined> {
    return this.financialAnalyses.get(id);
  }
  
  async getFinancialAnalysisByProfileId(profileId: number): Promise<FinancialAnalysis | undefined> {
    return Array.from(this.financialAnalyses.values()).find(
      (analysis) => analysis.profileId === profileId,
    );
  }
  
  async createFinancialAnalysis(insertAnalysis: InsertFinancialAnalysis): Promise<FinancialAnalysis> {
    const id = this.analysisId++;
    const createdAt = new Date().toISOString();
    const analysis: FinancialAnalysis = { ...insertAnalysis, id, createdAt };
    this.financialAnalyses.set(id, analysis);
    return analysis;
  }
}

// Export a singleton instance
export const storage = new MemStorage();
