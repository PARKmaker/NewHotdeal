import React from "react";
import style from "./ProductItem.module.css";

interface productProps {
  id: string;
  title: string;
  discountRate: string | number;
  discountedPrice: string | number;
  originalPrice: string | number;
  siteName: string;
  thumnail: string;
  href: string;
}

const ProductItem = (props: productProps) => {
  const {
    id,
    title,
    discountRate,
    discountedPrice,
    originalPrice,
    siteName,
    thumnail,
    href,
  } = props;

  const onSale = (rate: productProps["discountRate"]) => {
    return Number(rate) > 0;
  };

  return (
    <li id={String(id)} data-siteName={siteName}>
      <div className={style["product"]}>
        <a href={href}>
          <div className={style["product__img"]}>
            <img src={thumnail} alt={title} />
          </div>
          <p className={style["product__title"]}>{title}</p>
        </a>
        <div className={style["product__info"]}>
          <em className={style["product__discount_rate"]}>
            {onSale(discountRate) ? discountRate + "%" : ""}
          </em>
          <strong className={style["product__sale_price"]}>
            {discountedPrice.toLocaleString("ko-KR")}
          </strong>
          <del className={style["product__normal_price"]}>
            {onSale(discountRate)
              ? originalPrice.toLocaleString("ko-KR")
              : "특가"}
          </del>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
