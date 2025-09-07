import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  description: string;
  price_per_day: number;
  price_per_week: number;
  price_per_month: number;
  specifications: any;
  images: string[];
  available: boolean;
  created_at: string;
  updated_at: string;
}

export const useVehicles = (category?: string) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      setLoading(true);
      setError(null);

      try {
        let query = supabase
          .from('vehicles')
          .select('*')
          .eq('available', true)
          .order('created_at', { ascending: false });

        if (category) {
          query = query.eq('category', category);
        }

        const { data, error } = await query;

        if (error) {
          throw error;
        }

        setVehicles(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [category]);

  return { vehicles, loading, error };
};