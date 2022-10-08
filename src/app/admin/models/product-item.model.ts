export interface ProductItem {
  id: number;
  color: string;
  dimension: string;
  material: string;
  capacity: string;
  quantity: number;
  price: number;
  product_id: number;
  product_name: string;
  unit_of_measure_id: number;
  unit_of_measure_name: string;
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
