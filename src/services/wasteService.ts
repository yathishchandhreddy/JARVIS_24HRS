/**
 * WasteX AI - Waste Service Module
 * Handles industrial waste stream listing, retrieval, and updates.
 */
import { supabase, isSupabaseConfigured } from '@/src/lib/supabase';
import type { WasteListing } from '@/src/types';

export const wasteService = {
  /**
   * Fetch all active waste listings from database
   */
  async getListings(): Promise<WasteListing[]> {
    if (!isSupabaseConfigured || !supabase) {
      // In Step 1, real DB queries throw or return empty rather than mock data
      return [];
    }
    const { data, error } = await supabase
      .from('waste_listings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data as WasteListing[]) || [];
  },

  /**
   * Fetch a single waste listing by ID
   */
  async getListingById(id: string): Promise<WasteListing | null> {
    if (!isSupabaseConfigured || !supabase) {
      return null;
    }
    const { data, error } = await supabase
      .from('waste_listings')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data as WasteListing;
  },

  /**
   * Create a new industrial waste listing
   */
  async createListing(_listing: Omit<WasteListing, 'id' | 'created_at'>): Promise<WasteListing> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase backend not connected. Real database persistence will be activated in subsequent steps.');
    }
    throw new Error('Real waste listing creation will be wired to Supabase in Step 2.');
  },

  /**
   * Update existing listing
   */
  async updateListing(id: string, _updates: Partial<WasteListing>): Promise<WasteListing> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase backend not connected.');
    }
    throw new Error(`Real waste listing update for ${id} will be wired to Supabase in Step 2.`);
  },
};
