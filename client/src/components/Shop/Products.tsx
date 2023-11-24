import { Fragment, useState, useEffect } from "react";
import style from "./Products.module.css";
import ProductItem from "./ProductItem";
import dummy_data from "../dummyData.json";
import { getData } from "../../services/firbase";
import { ProductService } from "../../services/productService/productService";
import SiteFilterForm from "./SiteFilterForm";
import { makeShuffleNumbers } from "../../utils/suffle";
import { ProductFeed } from "../../models/product";

export interface filterValues {
  brands: string[];
  search: "";
}

const store = new ProductService();

if (!store.hasProducts) {
  store.setProducts(dummy_data);
}

/**
 * @description 상품 목록 페이지
 */

const Products: React.FC = () => {
  // let productsData = getData();
  const [filterList, setFilterList] = useState<filterValues>({
    brands: [],
    search: "",
  });
  const [productContent, setProductContent] = useState<JSX.Element[]>();

  function filterListHandler(values: filterValues) {
    const filteredProducts = store.getFilterProducts(values);
    setProductContent(
      makeProductContent(
        filteredProducts,
        makeShuffleNumbers(filteredProducts.length)
      )
    );
  }

  const siteNames = store.getSiteNames();

  /**
   * @description 정해진 순서대로 상품 컴포넌트 만들기
   */
  function makeProductContent(data: ProductFeed[], arrayIdx: number[]) {
    let content = [];
    for (let idx of arrayIdx) {
      const product = data[idx];
      content.push(
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          discountRate={product.info.discountRate}
          discountedPrice={product.info.discountedPrice}
          originalPrice={product.info.originalPrice}
          siteName={product.siteName}
          thumnail={product.thumnail}
          href={product.href}
        />
      );
    }
    return content;
  }

  useEffect(() => {
    setProductContent(
      makeProductContent(dummy_data, makeShuffleNumbers(dummy_data.length))
    );
  }, []);

  return (
    <Fragment>
      <nav className={style[`nav`]}>
        <SiteFilterForm
          siteNames={siteNames}
          onSubmit={filterListHandler}
          initialValues={filterList}
        />
      </nav>
      <section className={style["section"]}>
        <ul className={style[`product__list`]}>{productContent}</ul>
      </section>
    </Fragment>
  );
};

export default Products;
