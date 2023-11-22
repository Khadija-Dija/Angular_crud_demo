export interface IProduct {
  id?: number;
  user_id: number;
  nom: string;
  description: string;
  updatedAt?: string;
  createdAt?: string;
  deletedAt?: null | string;
}

export interface ISingleProduct {
  data: IProduct;
}

export interface IDataProduct {
  data: IProduct[];
}
