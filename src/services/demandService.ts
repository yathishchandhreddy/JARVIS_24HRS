/**
 * WasteX AI - Demand Intelligence Service Module
 * Handles regional market demand, circular feedstock pricing indices, and volume trends.
 */
import { supabase, isSupabaseConfigured } from '@/src/lib/supabase';
import type { DemandInsight } from '@/src/types';

export const demandService = {
  /**
   * Fetch market demand trends and insights
   */
  async getDemandInsights(): Promise<DemandInsight[]> {
    if (!isSupabaseConfigured || !supabase) {
      return [];
    }
    const { data, error } = await supabase
      .from('demand_insights')
      .select('*')
      .order('growth_rate_pct', { ascending: false });

    if (error) throw error;
    return (data as DemandInsight[]) || [];
  },

  /**
   * Fetch pricing insights for a specific material category
   */
  async getMaterialPriceIndex(material: string): Promise<DemandInsight | null> {
    if (!isSupabaseConfigured || !supabase) {
      return null;
    }
    const { data, error } = await supabase
      .from('demand_insights')
      .select('*')
      .ilike('material', `%${material}%`)
      .maybeSingle();

    if (error) throw error;
    return data as DemandInsight;
  },
};
