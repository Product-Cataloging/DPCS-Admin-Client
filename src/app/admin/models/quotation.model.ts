export interface Quotation {
  id: number;
  product_name: string;
  email: string;
  image_url: string;
  description: string;
}

export function createQuotation(params: Partial<Quotation>) {
  return {

  } as Quotation;
}
