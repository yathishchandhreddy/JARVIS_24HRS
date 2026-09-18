/**
 * WasteX AI - Real Supabase Valorization Service Module
 * Handles circular pathways persistence and queries in public.valorization_options.
 */
import { supabase, isSupabaseConfigured } from '@/src/lib/supabase';
import type { ValorizationOptionRow, InsertTables } from '@/src/types/database';

export const valorizationService = {
  /**
   * Get valorization pathways generated for a specific waste stream
   */
  async getOptionsByListingId(listingId: string): Promise<ValorizationOptionRow[]> {
    if (!isSupabaseConfigured || !supabase) {
      return [];
    }
    const { data, error } = await supabase
      .from('valorization_options')
      .select('*')
      .eq('waste_listing_id', listingId)
      .order('overall_score', { ascending: false });

    if (error) {
      console.warn('Valorization options fetch error:', error.message);
      return [];
    }
    return data || [];
  },

  /**
   * Save valorization options
   */
  async saveOptions(options: InsertTables<'valorization_options'>[]): Promise<ValorizationOptionRow[]> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase database not connected.');
    }
    const { data, error } = await supabase
      .from('valorization_options')
      .insert(options)
      .select('*');

    if (error) throw error;
    return data || [];
  },
};
