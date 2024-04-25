export type PackageID = 'single' | 'double';
export interface PackagePrice {
  amount: number;
  currency: string;
}
export interface Package {
  id: PackageID;
  price: PackagePrice;
  reportCount: number;
  title: string;
}
