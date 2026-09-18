/**
 * WasteX AI - Analysis Service Module
 * Handles persistence and retrieval of AI waste composition analyses.
 */
import { supabase, isSupabaseConfigured } from '@/src/lib/supabase';
import type { WasteAnalysis } from '@/src/types';

export const analysisService = {
  /**
   * Retrieve analysis results by waste listing ID
   */
  async getAnalysisByListingId(listingId: string): Promise<WasteAnalysis | null> {
    if (!isSupabaseConfigured || !supabase) {
      return null;
    }
    const { data, error } = await supabase
      .from('waste_analyses')
      .select('*')
      .eq('waste_listing_id', listingId)
      .single();

    if (error) throw error;
    return data as WasteAnalysis;
  },

  /**
   * Save an AI analysis record
   */
  async saveAnalysis(_analysis: Omit<WasteAnalysis, 'id' | 'created_at'>): Promise<WasteAnalysis> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase database not connected. Real analysis records are persisted in Step 2.');
    }
    throw new Error('Real analysis persistence is scheduled for Step 2.');
  },
};
