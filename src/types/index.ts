export interface Product {
  id: number;
  title: string;
  price: number;
  condition: string;
  image: string;
  description: string;
  specifications: Record<string, string>;
  seller: {
    name: string;
    rating: number;
    totalSales: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}