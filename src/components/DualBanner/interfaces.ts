export interface BannerProps {
  id: number;
  name: string;
  web: string;
  tablet: string;
  mobile: string;
}

export interface DualBannerProps {
  elements: BannerProps[];
}
