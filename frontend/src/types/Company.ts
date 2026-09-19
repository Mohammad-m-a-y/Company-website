export interface Company {
  id: number;
  name: string;
  site_slogan: string | null;
  logo: string | null;
  hero_image: string | null;

  phone: string | null;
  mobile: string | null;
  email: string | null;

  instagram: string | null;
  telegram: string | null;
  linkedin: string | null;
  twitter: string | null;

  address: string | null;

  favicon: string | null;

  seo_title: string | null;
  seo_description: string | null;

  maintenance_mode: boolean;
}