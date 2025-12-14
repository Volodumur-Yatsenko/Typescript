// src/types/types.ts
export type BaseProduct = {
    id: number;
    name: string;
    price: number;
  };
  
  export type Electronics = BaseProduct & {
    category: 'electronics';
    brand: string;
    model: string;
  };
  
  export type Clothing = BaseProduct & {
    category: 'clothing';
    size: string;
    material: string;
  };
  
  export type Book = BaseProduct & {
    category: 'book';
    author: string;
    genre: string;
  };
  