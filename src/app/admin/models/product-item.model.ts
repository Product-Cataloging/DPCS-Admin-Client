export interface ProductItem {
  id: number;
  color: string;
  dimension: string;
  material: string;
  capacity: string;
  price: number;
  product_id: number;
  product_name: string;
  packaging_unit: string;
  currency_id: number;
  currency_name: string;
  supplier_id: number;
  supplier_company_name: string;
  status: 'Approved' | 'Waiting' | 'Declined';
}

export function createProductItem(params: Partial<ProductItem>) {
  return {

  } as ProductItem;
}
