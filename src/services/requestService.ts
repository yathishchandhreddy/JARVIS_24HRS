/**
 * WasteX AI - Circular Exchange Request Service Module
 * Handles bilateral transaction negotiation, trade requests, and settlement tracking.
 */
import { supabase, isSupabaseConfigured } from '@/src/lib/supabase';
import type { Request } from '@/src/types';

export const requestService = {
  /**
   * Get trade requests for current user (sent or received)
   */
  async getRequests(_userId: string): Promise<Request[]> {
    if (!isSupabaseConfigured || !supabase) {
      return [];
    }
    const { data, error } = await supabase
      .from('requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data as Request[]) || [];
  },

  /**
   * Submit a trade or sample request
   */
  async submitRequest(_request: Omit<Request, 'id' | 'created_at'>): Promise<Request> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase database not connected. Real trade requests will be executed in Step 2.');
    }
    throw new Error('Real transaction requests are scheduled for Step 2.');
  },

  /**
   * Update request status (accept, decline, fulfill)
   */
  async updateStatus(id: string, _status: Request['status']): Promise<Request> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase database not connected.');
    }
    throw new Error(`Real status transition for request ${id} scheduled for Step 2.`);
  },
};
