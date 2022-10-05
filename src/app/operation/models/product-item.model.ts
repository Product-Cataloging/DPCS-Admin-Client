export interface ProductItem {
  id: number;
  color: string;
  size: string;
  unit_of_measure_id: number;
  product_image: string;
  price: number;
  product_id: number;
  currency_id: number;
}

export function createProductItem(params: Partial<ProductItem>) {
  return {

  } as ProductItem;
}
