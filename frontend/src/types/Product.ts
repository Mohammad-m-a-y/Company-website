
export interface Product{
  id: number;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  image: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}