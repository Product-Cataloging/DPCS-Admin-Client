export interface Category {
  id: number;
  name: string;
  description: string;
  ancestry?: number;
}

export function createCategory(params: Partial<Category>) {
  return {

  } as Category;
}
