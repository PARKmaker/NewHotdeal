import { Fragment, useState, useEffect } from "react";
import style from "./Products.module.css";
import ProductItem from "./ProductItem";
import dummy_data from "../dummyData.json";
// import { getData } from "../../services/firbase";
import { makeShuffleIndexList } from "../../utils/suffle";
import { FilterValues, ProductFeed, ProductStore } from "../../models/product";
import ShopNav from "../ShopNav/ShopNav";
import SearchForm from "../ShopNav/ProductSearch/SearchForm";
import CheckboxFilterForm from "../ShopNav/SiteFilter/CheckboxFilterForm";

/**
 * @description 상품 목록 페이지
 */

const Products: React.FC<{ store: ProductStore }> = ({ store }) => {
  // let productsData = getData();
  const [productsContents, setProductsContents] = useState<JSX.Element[]>();
  // const [products, setProducts] = useState<ProductFeed[]>(
  //   store.getAllProducts()
  // );

  function makeProductsContent(products: ProductFeed[], arrayIdx: number[]) {
    // 무작위 순서로 products 컴포넌트 만들기
    let content = [];
    for (let idx of arrayIdx) {
      const product = products[idx];
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
        makeShuffleIndexList(filteredProducts.length)
      )
    );
    // setProducts(filteredProducts);
  };

  useEffect(() => {
    // 첫 페이지 렌더링 때 컴포넌트 만들기
    setProductsContents(
      makeProductsContent(dummy_data, makeShuffleIndexList(dummy_data.length))
    );
  }, []);

  return (
    <Fragment>
      <nav className={style[`nav`]}>
        <ShopNav>
          <SearchForm products={store.getAllProducts()} />
          <CheckboxFilterForm
            siteNames={store.getSiteNames()}
            onSubmit={submitFilterHandler}
          />
        </ShopNav>
        {/* <SiteCheckboxFilterForm
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
