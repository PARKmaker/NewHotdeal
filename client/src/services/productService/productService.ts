import { filterValues } from "../../components/Shop/Products";
import { ProductFeed, ProductStore } from "../../models/product";

export class ProductService implements ProductStore {
  private products: ProductFeed[];

  constructor() {
    this.products = [];
  }

  getAllProducts(): ProductFeed[] {
    return this.products;
  }

  setProducts(products: ProductFeed[]) {
    this.products = products.map((product) => ({
      ...product,
      read: false,
    }));
  }

  makeRead() {}
  get hasProducts() {
    return this.products.length > 0;
  }

  getSiteNames(): string[] {
    if (this.hasProducts) {
      const names = this.products.map((prd) => prd.siteName);
      return Array.from(new Set(names));
    }

    return [];
  }

  getFilterProducts(filterValues: filterValues) {
    return this.products.filter(
      (product) =>
        !filterValues.brands ||
        filterValues.brands.length === 0 ||
        filterValues.brands.includes(product.siteName)
    );
  }
}
