import { Response } from '@interfaces/apiResponse';
import { Product } from '@interfaces/product';
export interface ProductDetailsProps {
  product: Product;
}
export interface Client {
  id: number;
  value: number;
  text: string;
}
export interface ClientResponseProps extends Response {
  data: Client[];
}
