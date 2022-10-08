export interface Product {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category_id: number;
  category_name: string;
  brand: string;
}

export function createProduct(params: Partial<Product>) {
  return {

  } as Product;
}
