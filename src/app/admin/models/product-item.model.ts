export interface ProductItem {
  id: number;
  color: string;
  dimensions: string;
  material: string;
  quantity: number;
  price: number;
  product_id: number;
  package_unit_id: number;
  currency_id: number;
  supplier_id: number;
}

export function createProductItem(params: Partial<ProductItem>) {
  return {

  } as ProductItem;
}
