export interface ProductItem {
  id: number;
  color: string;
  dimensions: string;
  material: string;
  unit_id: number;
  product_id: number;
}

export function createProductItem(params: Partial<ProductItem>) {
  return {

  } as ProductItem;
}
