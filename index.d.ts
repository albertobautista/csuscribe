export type Url = string;
export type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

export type TProductId = string;

export type TProductAttributes = {
  description: string;
  shape: string;
  hardiness: string;
  taste: string;
};

export type TProduct = {
  id: TProductId;
  name: string;
  sku: string;
  price: number;
  image: Url;
  attributes: TProductAttributes;
};

export type TAPIAVODetailResponse = TProduct;

export type TAPIAvoResponse = {
  length: number;
  data: TProduct[];
  error?: string;
};
