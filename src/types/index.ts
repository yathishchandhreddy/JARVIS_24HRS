/**
 * WasteX AI - Comprehensive Type System
 * Strict TypeScript definitions for Industrial Waste Valorization & Exchange Platform
 */

export * from './database';

export type UserRole = 'generator' | 'buyer' | 'admin';

export type ListingStatus = 'active' | 'matched' | 'reserved' | 'completed' | 'closed' | 'draft' | 'analyzed' | 'valorized' | 'listed' | 'archived';
export type RequirementStatus = 'active' | 'closed' | 'fulfilled' | 'paused';
export type MatchStatus = 'potential' | 'negotiating' | 'requested' | 'completed' | 'declined';
export type RequestStatus = 'pending' | 'accepted' | 'rejected' | 'completed' | 'in_fulfillment' | 'settled';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization: string;
  location?: string | null;
  created_at: string;
  // Compatibility aliases
  full_name?: string;
  company_name?: string;
  facility_node?: string;
  phone?: string;
  avatar_url?: string;
  updated_at?: string;
}

export interface WasteListing {
  id: string;
  generator_id: string;
  waste_type: string;
  material: string;
  subcategory: string;
  quantity: number;
  unit: 'MT' | 'KG' | 'LBS' | 'BARRELS' | 'CU_M';
  quality: string;
  location: string;
  image_url: string;
  description: string;
  generation_frequency: 'One-time' | 'Daily' | 'Weekly' | 'Bi-Weekly Recurring' | 'Monthly' | 'Quarterly';
  status: ListingStatus;
  created_at: string;
  updated_at?: string;
}

export interface SpectralAnalysisPoint {
  wavelength_nm?: number;
  frequency_cm1?: number;
  absorbance: number;
  label?: string;
}

export interface ChemicalCompositionItem {
  component: string;
  percentage: number;
  formula?: string;
  is_contaminant: boolean;
}

export interface WasteAnalysis {
  id: string;
  waste_listing_id: string;
  category: string;
  material: string;
  subcategory: string;
  composition: ChemicalCompositionItem[];
  spectral_profile?: SpectralAnalysisPoint[];
  moisture_ratio?: number;
  contaminants_ratio?: number;
  contaminants_type?: string;
  recyclability: string;
  recyclability_tier: 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Non-recyclable';
  carbon_avoidance_tco2e?: number;
  feedstock_spec?: string;
  reuse_potential: number; // 0 - 100
  recovery_potential: number; // 0 - 100
  ai_confidence: number; // 0 - 100
  ai_summary: string;
  detection_modality: 'VIS-NIR Spectroscopic & CV' | 'Visual Computer Vision' | 'Lab Assay Verification';
  created_at: string;
}

export interface ValorizationOption {
  id: string;
  waste_listing_id: string;
  pathway: string;
  target_product?: string;
  estimated_value: number;
  currency: string;
  market_demand_score: number; // 0 - 100
  environmental_benefit_score: number; // 0 - 100
  feasibility_score: number; // 0 - 100
  overall_score: number; // 0 - 100
  carbon_avoidance_potential_tco2e?: number;
  capex_requirement?: 'Low' | 'Moderate' | 'High' | 'Capital Intensive';
  technology_readiness_level?: number; // 1 - 9
  reason: string;
  created_at: string;
}

export interface BuyerRequirement {
  id: string;
  buyer_id: string;
  buyer_company?: string;
  material: string;
  waste_type: string;
  min_quantity: number;
  max_quantity: number;
  unit: 'MT' | 'KG' | 'LBS' | 'BARRELS' | 'CU_M';
  quality_requirement: string;
  location: string;
  max_price: number;
  currency: string;
  frequency: string;
  description: string;
  status: RequirementStatus;
  created_at: string;
}

export interface WasteMatch {
  id: string;
  waste_listing_id: string;
  buyer_requirement_id: string;
  match_score: number; // 0 - 100
  material_score: number;
  quantity_score: number;
  quality_score: number;
  location_score: number;
  price_score: number;
  frequency_score: number;
  reason: string;
  created_at: string;
  // Optional enriched fields for UI
  listing?: WasteListing;
  requirement?: BuyerRequirement;
}

export interface Request {
  id: string;
  match_id?: string;
  sender_id: string;
  receiver_id: string;
  quantity: number;
  proposed_price: number;
  currency: string;
  message: string;
  status: RequestStatus;
  created_at: string;
  updated_at?: string;
}

export interface DemandInsight {
  id: string;
  material: string;
  category: string;
  region: string;
  demand_trend: 'surging' | 'stable' | 'contracting' | 'volatile';
  growth_rate_pct: number;
  average_price_per_unit: number;
  unit: string;
  currency: string;
  top_applications: string[];
  confidence_score: number;
  last_updated: string;
}
