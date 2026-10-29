export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  badge?: string;
  colors?: string[];
  gradient: string;
}

export interface CartItem extends Product {
  quantity: number;
}
