// src/features/products/productTypes.ts
export type Product = {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    images: string[];
    category: string;
  };
  
  export type ProductListResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  };
  