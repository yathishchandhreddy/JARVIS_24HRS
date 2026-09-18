/**
 * WasteX AI - Matching Service Module
 * Prepares interfaces for bilateral circular economy buyer-seller matching.
 */
import { supabase, isSupabaseConfigured } from '@/src/lib/supabase';
import type { WasteMatch, BuyerRequirement } from '@/src/types';

export const matchingService = {
  /**
   * Fetch buyer requirements
   */
  async getRequirements(): Promise<BuyerRequirement[]> {
    if (!isSupabaseConfigured || !supabase) {
      return [];
    }
    const { data, error } = await supabase
      .from('buyer_requirements')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data as BuyerRequirement[]) || [];
  },

  /**
   * Get matches for a generator's waste listing
   */
  async getMatchesForListing(listingId: string): Promise<WasteMatch[]> {
    if (!isSupabaseConfigured || !supabase) {
      return [];
    }
    const { data, error } = await supabase
      .from('waste_matches')
      .select('*, requirement:buyer_requirements(*)')
      .eq('waste_listing_id', listingId)
      .order('match_score', { ascending: false });

    if (error) throw error;
    return (data as WasteMatch[]) || [];
  },

  /**
   * Post a new buyer requirement
   */
  async createRequirement(_req: Omit<BuyerRequirement, 'id' | 'created_at'>): Promise<BuyerRequirement> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase database not connected. Real buyer requirements will be saved in Step 2.');
    }
    throw new Error('Real buyer requirement creation is scheduled for Step 2.');
  },
};
