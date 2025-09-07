-- Insert admin profile for the user
INSERT INTO public.profiles (user_id, first_name, last_name, role)
SELECT id, 'Admin', 'Horse Mobile', 'admin'
FROM auth.users 
WHERE email = 'horsemobilegmbh@outlook.fr'
ON CONFLICT (user_id) DO UPDATE SET role = 'admin';