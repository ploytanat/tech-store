export interface Product {
  id: number;
  slug: string;
  name: string;
  description?: string;
  rating?: number;
  reviewsCount?: number;
  price: number;
  oldPrice?: number;
  img: string;
  brand?: string;
  inStock?: boolean;
}

export interface MegaMenuCategory {
  id: number;
  name: string;
  subcategories?: string[];
  products?: Product[];
  brands?: { id: number; name: string; logo: string; }[];
}
