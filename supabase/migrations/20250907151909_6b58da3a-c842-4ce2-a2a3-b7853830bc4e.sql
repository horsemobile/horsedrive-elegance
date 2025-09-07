-- Rename bookings table to orders and update structure for sales
ALTER TABLE public.bookings RENAME TO orders;

-- Remove rental-specific columns and add sales-specific ones
ALTER TABLE public.orders DROP COLUMN start_date;
ALTER TABLE public.orders DROP COLUMN end_date;
ALTER TABLE public.orders ADD COLUMN delivery_date date;
ALTER TABLE public.orders ADD COLUMN purchase_price numeric;

-- Update vehicles table - remove rental pricing, add sale price
ALTER TABLE public.vehicles DROP COLUMN price_per_day;
ALTER TABLE public.vehicles DROP COLUMN price_per_week;
ALTER TABLE public.vehicles DROP COLUMN price_per_month;
ALTER TABLE public.vehicles ADD COLUMN sale_price numeric;

-- Update available column meaning (true = available for sale)
COMMENT ON COLUMN public.vehicles.available IS 'Vehicle available for sale';

-- Update policies to reference orders instead of bookings
DROP POLICY IF EXISTS "Admins can view all bookings" ON public.orders;
DROP POLICY IF EXISTS "Admins can update bookings" ON public.orders;
DROP POLICY IF EXISTS "Anyone can create bookings" ON public.orders;

CREATE POLICY "Admins can view all orders" 
ON public.orders 
FOR SELECT 
USING (EXISTS ( SELECT 1 FROM profiles WHERE ((profiles.user_id = auth.uid()) AND (profiles.role = 'admin'::text))));

CREATE POLICY "Admins can update orders" 
ON public.orders 
FOR UPDATE 
USING (EXISTS ( SELECT 1 FROM profiles WHERE ((profiles.user_id = auth.uid()) AND (profiles.role = 'admin'::text))));

CREATE POLICY "Anyone can create orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (true);