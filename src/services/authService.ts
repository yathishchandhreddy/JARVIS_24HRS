/**
 * WasteX AI - Authentication Service Interface
 * Prepares the application for Supabase Auth integration in Step 2.
 */
import { supabase, isSupabaseConfigured } from '@/src/lib/supabase';
import type { UserProfile, UserRole } from '@/src/types';

export interface AuthSession {
  user: UserProfile | null;
  token: string | null;
}

export const authService = {
  /**
   * Get current active session
   */
  async getSession(): Promise<AuthSession | null> {
    if (!isSupabaseConfigured || !supabase) {
      // Step 1 Foundation: Explicitly unconfigured
      return null;
    }
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    if (!data.session) return null;
    return {
      user: null, // Will be hydrated from profiles table in Step 2
      token: data.session.access_token,
    };
  },

  /**
   * Sign in with Email & Password
   */
  async signIn(email: string, _password: string): Promise<UserProfile> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error(
        'Supabase authentication is not configured yet. Configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable authentication.'
      );
    }
    throw new Error('Real authentication is scheduled for Step 2. Email: ' + email);
  },

  /**
   * Sign up as Generator or Buyer
   */
  async signUp(email: string, _password: string, _role: UserRole, _company: string): Promise<UserProfile> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error(
        'Supabase authentication is not configured yet. Configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable user registration.'
      );
    }
    throw new Error('Real user registration is scheduled for Step 2. Email: ' + email);
  },

  /**
   * Sign out current user
   */
  async signOut(): Promise<void> {
    if (!isSupabaseConfigured || !supabase) return;
    await supabase.auth.signOut();
  },
};
