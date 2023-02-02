export interface IProductCreate {
  name: string;
  count: number | null;
  short_description: string;
}

export default interface IProduct {
  id: number;
  name: string;
  count: number | null;
  short_description: string;
}
