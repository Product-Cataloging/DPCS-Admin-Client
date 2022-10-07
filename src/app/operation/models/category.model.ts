export interface Category {
  id: number;
  name: string;
  description: string;
  parent_id?: number;
}

export function createCategory(params: Partial<Category>) {
  return {

  } as Category;
}
