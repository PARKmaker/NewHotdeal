import React from "react";
import style from "./AutoSearch.module.css";
import { ProductFeed } from "../../../models/product";

function isArrayEmpty(arr: ProductFeed[]) {
  return arr.length === 0;
}

const AutoSearch: React.FC<{
  product: ProductFeed[];
  onHover: (bool: boolean) => void;
  onProductId: (id: string) => void;
}> = (props) => {
  const productMouseOverHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const target = event.target as HTMLButtonElement;
    props.onProductId(target.id);
    props.onHover(true);
  };

  const productMouseOutHandler = () => {
    props.onProductId("");
    props.onHover(false);
  };

  return (
    <div className={style["auto-search-modal"]}>
      <ul className={style["search-list"]}>
        {isArrayEmpty(props.product) && <p>검색기록 없음</p>}

        {!isArrayEmpty(props.product) &&
          props.product.map((product) => (
            <li
              key={product.id}
              id={product.id}
              onMouseOver={productMouseOverHandler}
              onMouseOut={productMouseOutHandler}
            >
              {product.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AutoSearch;
