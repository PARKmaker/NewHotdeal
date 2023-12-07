export interface ProductStore {
  getAllProducts: () => ProductFeed[];
  setProducts: (products: ProductFeed[]) => void;
  makeRead: (id: number) => void;
  getSiteNames: () => string[];
  getFilterProducts: (filtervalues: FilterValues) => ProductFeed[];
  hasProducts: boolean;
}
export interface Product {
  id: string;
  title: string;
  thumnail: string;
  href: string;
  siteName: string;
  info: {
    discountRate: string | number;
    discountedPrice: string | number;
    originalPrice: string | number;
  };
  endDate: string;
}

export interface ProductFeed extends Product {
  read?: boolean;
}

export interface FilterValues {
  brands: string[];
  search: string;
}
