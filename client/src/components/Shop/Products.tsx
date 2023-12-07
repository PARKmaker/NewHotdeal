import { Fragment, useState, useEffect } from "react";
import style from "./Products.module.css";
import ProductItem from "./ProductItem";
import dummy_data from "../dummyData.json";
// import { getData } from "../../services/firbase";
import { makeShuffleNumbers } from "../../utils/suffle";
import { FilterValues, ProductFeed, ProductStore } from "../../models/product";
import ShopNav from "../ShopNav/ShopNav";
import SearchForm from "../ShopNav/Search/SearchForm";
import FilterForm from "../ShopNav/Checkbox/FilterForm";

/**
 * @description 상품 목록 페이지
 */

const Products: React.FC<{ store: ProductStore }> = ({ store }) => {
  // let productsData = getData();
  const [productsContents, setProductsContents] = useState<JSX.Element[]>();
  const [products, setProducts] = useState<ProductFeed[]>(
    store.getAllProducts()
  );

  function makeProductsContent(data: ProductFeed[], arrayIdx: number[]) {
    // 무작위 순서로 products 컴포넌트 만들기
    let content = [];
    for (let idx of arrayIdx) {
      const product = data[idx];
      const info = {
        discountRate: product.info.discountRate,
        discountedPrice: product.info.discountedPrice,
        originalPrice: product.info.originalPrice,
      };

      content.push(
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          info={info}
          siteName={product.siteName}
          thumnail={product.thumnail}
          href={product.href}
          endDate={product.endDate}
        />
      );
    }
    return content;
  }

  const submitFilterHandler = (values: FilterValues) => {
    const filteredProducts = store.getFilterProducts(values);
    setProductsContents(
      makeProductsContent(
        filteredProducts,
        makeShuffleNumbers(filteredProducts.length)
      )
    );
    setProducts(filteredProducts);
  };

  useEffect(() => {
    // 첫 페이지 렌더링 때 컴포넌트 만들기
    setProductsContents(
      makeProductsContent(dummy_data, makeShuffleNumbers(dummy_data.length))
    );
  }, []);

  return (
    <Fragment>
      <nav className={style[`nav`]}>
        <ShopNav>
          <SearchForm products={store.getAllProducts()} />
          <FilterForm
            siteNames={store.getSiteNames()}
            onSubmit={submitFilterHandler}
          />
        </ShopNav>
        {/* <SiteFilterForm
          siteNames={store.getSiteNames()}
          onSubmit={submitFilterHandler}
        /> */}
      </nav>
      <section className={style["section"]}>
        <ul className={style[`product__list`]}>{productsContents}</ul>
      </section>
    </Fragment>
  );
};

export default Products;
