import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@shared/schema';

// Environment detection
const isProduction = process.env.NODE_ENV === 'production';

// For production environments only (e.g., Vercel)
export function getDbClient() {
  // Only use database client in production environment
  if (isProduction && process.env.DATABASE_URL) {
    const sql = neon(process.env.DATABASE_URL);
    return drizzle(sql, { schema });
  }
  
  // For development, we'll use our in-memory storage
  return null;
}

// Export singleton
export const db = getDbClient();