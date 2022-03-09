export interface ApiResponseProducts {
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
  options: Maker[] | Type[];
}

export interface Maker {
  id: number;
  value: number;
  text: string;
}

export interface RenovationScheme {
  id: number;
  value: number;
  text: string;
}

export interface Type {
  id: number;
  value: number;
  text: string;
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
  renovationScheme: RenovationScheme[];
  price: Price[];
  maker: Maker;
  promotionPrice: number;
  productType: Type;
}

export interface Price {
  id: number;
  value: number;
}
