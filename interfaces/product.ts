export interface ApiResponseP {
  data: Data;
}
export interface Data {
  statusCode: number;
  message: string;
  content: Content;
}

export interface Content {
  products: Product[];
  filterStatics: FilterStatic[];
}

export interface FilterStatic {
  title: string;
  field: string;
  options: Maker[];
}

export interface Maker {
  id: number;
  value: number;
  text: StringConstructor;
}

export interface Product {
  productId: number;
  sku: string;
  name: string;
  description: string;
  lastUpdateProduct: string;
  currencyPrice: string;
  maxQuantity: number | null;
  image: string;
  renovationScheme: Maker[];
  price: Price[];
  maker: Maker;
  promotionPrice: number;
  productType: Maker;
}

export interface Price {
  id: number;
  value: number;
}
