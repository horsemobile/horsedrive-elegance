-- Créer la table des profils utilisateurs
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS sur les profils
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Politiques pour les profils
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Créer la table des véhicules
CREATE TABLE public.vehicles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('vans', 'camions', 'vans_amenage', 'remorques')),
  description TEXT,
  price_per_day DECIMAL(10,2),
  price_per_week DECIMAL(10,2),
  price_per_month DECIMAL(10,2),
  specifications JSONB DEFAULT '{}',
  images TEXT[] DEFAULT '{}',
  available BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS sur les véhicules
ALTER TABLE public.vehicles ENABLE ROW LEVEL SECURITY;

-- Politiques pour les véhicules (lecture publique, écriture admin)
CREATE POLICY "Anyone can view available vehicles" 
ON public.vehicles 
FOR SELECT 
USING (available = true);

CREATE POLICY "Admins can manage vehicles" 
ON public.vehicles 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- Créer la table des réservations/devis
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  vehicle_id UUID NOT NULL REFERENCES public.vehicles(id) ON DELETE CASCADE,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_price DECIMAL(10,2),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS sur les réservations
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Politiques pour les réservations
CREATE POLICY "Anyone can create bookings" 
ON public.bookings 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all bookings" 
ON public.bookings 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Admins can update bookings" 
ON public.bookings 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- Créer les buckets de stockage pour les images
INSERT INTO storage.buckets (id, name, public) VALUES ('vehicle-images', 'vehicle-images', true);

-- Politiques pour le stockage des images véhicules
CREATE POLICY "Public can view vehicle images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'vehicle-images');

CREATE POLICY "Admins can upload vehicle images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'vehicle-images' AND
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Admins can update vehicle images" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'vehicle-images' AND
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Admins can delete vehicle images" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'vehicle-images' AND
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- Fonction pour mettre à jour les timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Triggers pour les timestamps
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_vehicles_updated_at
  BEFORE UPDATE ON public.vehicles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Fonction pour créer automatiquement un profil utilisateur
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, first_name, last_name, role)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name',
    CASE 
      WHEN NEW.email = 'admin@horsemobile.com' THEN 'admin'
      ELSE 'user'
    END
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger pour créer un profil automatiquement
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insérer quelques véhicules exemple
INSERT INTO public.vehicles (name, category, description, price_per_day, price_per_week, price_per_month, specifications) VALUES
('Mercedes Sprinter 2023', 'vans', 'Van spacieux et moderne, parfait pour les déménagements et transports de marchandises.', 89.00, 450.00, 1200.00, '{"capacity": "3.5T", "volume": "14m³", "fuel": "Diesel", "transmission": "Manuelle"}'),
('Iveco Daily Benne', 'camions', 'Camion benne idéal pour les travaux de construction et transport de matériaux.', 120.00, 650.00, 1800.00, '{"capacity": "7.5T", "volume": "Benne 4m²", "fuel": "Diesel", "transmission": "Manuelle"}'),
('Volkswagen Crafter Aménagé', 'vans_amenage', 'Van aménagé tout équipé pour vos vacances et aventures.', 150.00, 900.00, 2500.00, '{"beds": "2 lits", "kitchen": "Kitchenette équipée", "shower": "Douche", "toilet": "WC", "heating": "Chauffage"}'),
('Remorque Plateau 750kg', 'remorques', 'Remorque plateau légère pour transport de matériaux légers.', 25.00, 120.00, 300.00, '{"capacity": "750kg", "dimensions": "2.5m x 1.3m", "brake": "Non freinée"}')