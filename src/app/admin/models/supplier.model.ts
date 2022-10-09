export interface Supplier {
  id: number;
  company_name: string;
  address_line: string;
  primary_phone_number: string;
  email: string;
  postal_code?: string;
  fax?: string;
}

export function createSupplier(params: Partial<Supplier>) {
  return {

  } as Supplier;
}
