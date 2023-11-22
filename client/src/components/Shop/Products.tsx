import React, { Fragment } from "react";
import style from "./Products.module.css";
import ProductItem from "./ProductItem";
import dummy_data from "../dummyData.json";

const Products = () => {
  let idCnt = 0;

  return (
    <Fragment>
      <nav className={style[`nav`]}>
        <li>전체</li>
        <li className={style["choice"]}>11번가</li>
        <li>G마켓</li>
      </nav>
      <section className={style["section"]}>
        <ul className={style[`product__list`]}>
          {dummy_data.map((product) => (
            <ProductItem
              key={idCnt}
              id={idCnt++}
              title={product.title}
              discountRate={product.info.discountRate}
              discountedPrice={product.info.discountedPrice}
              originalPrice={product.info.originalPrice}
              siteName={product.siteName}
              thumnail={product.thumnail}
              href={product.href}
            />
          ))}
        </ul>
      </section>
    </Fragment>
  );
};

export default Products;
