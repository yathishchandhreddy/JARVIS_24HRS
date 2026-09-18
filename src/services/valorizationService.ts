/**
 * WasteX AI - Valorization Service Module
 * Handles retrieval and scoring persistence for circular pathways.
 */
import { supabase, isSupabaseConfigured } from '@/src/lib/supabase';
import type { ValorizationOption } from '@/src/types';

export const valorizationService = {
  /**
   * Get valorization pathways generated for a specific waste stream
   */
  async getOptionsByListingId(listingId: string): Promise<ValorizationOption[]> {
    if (!isSupabaseConfigured || !supabase) {
      return [];
    }
    const { data, error } = await supabase
      .from('valorization_options')
      .select('*')
      .eq('waste_listing_id', listingId)
      .order('overall_score', { ascending: false });

    if (error) throw error;
    return (data as ValorizationOption[]) || [];
  },

  /**
   * Save valorization options
   */
  async saveOptions(_options: Omit<ValorizationOption, 'id' | 'created_at'>[]): Promise<ValorizationOption[]> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase database not connected. Real valorization persistence is scheduled for Step 2.');
    }
    throw new Error('Real valorization persistence will be implemented in Step 2.');
  },
};
