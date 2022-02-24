export interface BrandProps {
  imageWeb: string;
  text: string;
  redirect: string;
}

export interface BrandsListProps {
  device: 'computer' | 'tablet' | 'mobile';
  elements: BrandProps[];
}
