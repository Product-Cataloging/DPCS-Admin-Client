export interface Quotation {
  id: number;
  product_name: string;
  first_name: string;
  last_name: string;
  email: string;
  image_url: string;
  description: string;
  phone_number: string;
  status: string;
  quantity: number;
}

export function createQuotation(params: Partial<Quotation>) {
  return {

  } as Quotation;
}
