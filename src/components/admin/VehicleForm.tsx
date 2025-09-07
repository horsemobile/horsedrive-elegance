import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

const vehicleSchema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  category: z.string().min(1, 'La catégorie est requise'),
  description: z.string().optional(),
  sale_price: z.number().min(0, 'Le prix de vente doit être positif'),
  available: z.boolean(),
  specifications: z.object({
    dimensions: z.string().optional(),
    weight: z.string().optional(),
    fuel: z.string().optional(),
    capacity: z.string().optional(),
  }).optional(),
});

type VehicleFormData = z.infer<typeof vehicleSchema>;

interface VehicleFormProps {
  vehicleId?: string;
  onClose: () => void;
  onSave: () => void;
}

export default function VehicleForm({ vehicleId, onClose, onSave }: VehicleFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm<VehicleFormData>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      name: '',
      category: '',
      description: '',
      sale_price: 0,
      available: true,
      specifications: {
        dimensions: '',
        weight: '',
        fuel: '',
        capacity: '',
      },
    },
  });

  useEffect(() => {
    if (vehicleId) {
      loadVehicle();
    }
  }, [vehicleId]);

  const loadVehicle = async () => {
    if (!vehicleId) return;

    setIsLoading(true);
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .eq('id', vehicleId)
      .single();

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger le véhicule",
        variant: "destructive",
      });
    } else if (data) {
      form.reset({
        name: data.name,
        category: data.category,
        description: data.description || '',
        sale_price: Number(data.sale_price) || 0,
        available: data.available,
        specifications: (data.specifications as any) || {},
      });
      setUploadedImages(data.images || []);
    }

    setIsLoading(false);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const newImages: string[] = [];

    for (const file of Array.from(files)) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('vehicle-images')
        .upload(filePath, file);

      if (uploadError) {
        toast({
          title: "Erreur",
          description: "Erreur lors de l'upload de l'image",
          variant: "destructive",
        });
        continue;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('vehicle-images')
        .getPublicUrl(filePath);

      newImages.push(publicUrl);
    }

    setUploadedImages(prev => [...prev, ...newImages]);
    setIsUploading(false);
  };

  const removeImage = async (imageUrl: string) => {
    setUploadedImages(prev => prev.filter(img => img !== imageUrl));
  };

  const onSubmit = async (data: VehicleFormData) => {
    setIsLoading(true);

    const vehicleData = {
      name: data.name,
      category: data.category,
      description: data.description || '',
      sale_price: data.sale_price,
      available: data.available,
      images: uploadedImages,
      specifications: data.specifications || {},
    };

    try {
      if (vehicleId) {
        const { error } = await supabase
          .from('vehicles')
          .update(vehicleData)
          .eq('id', vehicleId);

        if (error) throw error;

        toast({
          title: "Succès",
          description: "Véhicule modifié avec succès",
        });
      } else {
        const { error } = await supabase
          .from('vehicles')
          .insert([vehicleData]);

        if (error) throw error;

        toast({
          title: "Succès",
          description: "Véhicule ajouté avec succès",
        });
      }

      onSave();
      onClose();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Erreur lors de la sauvegarde",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>
          {vehicleId ? 'Modifier le véhicule' : 'Ajouter un véhicule'}
        </CardTitle>
        <CardDescription>
          Remplissez les informations du véhicule à vendre
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom du véhicule</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Mercedes Sprinter 313 CDI" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Catégorie</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner une catégorie" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="vans">Vans</SelectItem>
                        <SelectItem value="camions">Camions</SelectItem>
                        <SelectItem value="vans_amenage">Vans Aménagés</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Description détaillée du véhicule..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sale_price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prix de vente (€)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="0"
                      step="0.01"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="specifications.dimensions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dimensions</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 5.99m x 2.05m x 2.56m" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specifications.weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Poids</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 3500kg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specifications.fuel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carburant</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Diesel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specifications.capacity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Capacité</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 2-3 chevaux" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="available"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Disponible</FormLabel>
                    <FormDescription>
                      Ce véhicule est-il disponible à la vente ?
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <label className="text-base font-medium">Images</label>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeImage(image)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {isUploading ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                    ) : (
                      <>
                        <ImageIcon className="w-6 h-6 text-muted-foreground mb-2" />
                        <p className="text-xs text-muted-foreground text-center">
                          Cliquer pour ajouter
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUploading}
                  />
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Annuler
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Sauvegarde...' : vehicleId ? 'Modifier' : 'Ajouter'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}