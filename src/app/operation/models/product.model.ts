export interface Product {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category_id: number;
  supplier_id: number;
}

export function createProduct(params: Partial<Product>) {
  return {

  } as Product;
}
