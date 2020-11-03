export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  producer: string;
  uploaderId: number;
  barcode: string;
  ratings: [Rating];
}

export interface Rating {
  id: number;
  rating: number;
  text: string;
  title: string;
  user: User;
  product: Product;
}

export interface User {
  id: number;
  accountName: string;
  password: string;
}

export interface Token {
  id: string;
  value: string;
}

