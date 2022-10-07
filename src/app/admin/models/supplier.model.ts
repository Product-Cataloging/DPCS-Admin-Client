export interface Supplier {
  id: number;
  name: string;
  description: string;
  address_line_1: string;
  primary_phone_number: string;
  postal_code: string;
  email: string;
  fax: string;
}

export function createSupplier(params: Partial<Supplier>) {
  return {

  } as Supplier;
}
