export interface Product {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category_id: number;
  brand: string;
}

export function createProduct(params: Partial<Product>) {
  return {

  } as Product;
}
