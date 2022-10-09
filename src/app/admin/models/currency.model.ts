export interface Currency {
  id: number;
  name: string;
  aliass: string;//data coming from the database has 'aliass' field not 'alias'
}

export function createCurrency(params: Partial<Currency>) {
  return {

  } as Currency;
}
