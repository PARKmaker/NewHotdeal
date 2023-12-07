import React, { useEffect, useState } from "react";
import style from "./SearchForm.module.css";
import { ProductFeed, FilterValues } from "../../../models/product";
import AutoSearch from "./AutoSearch";
import ProductItem from "../../Shop/ProductItem";
import SearchItemWrapper from "./SearchItemWrapper";
import HoverItemWrapper from "./HoverItemWrapper";

const initialHoverProduct = {
  key: "",
  id: "",
  title: "",
  info: {
    discountRate: "",
    discountedPrice: "",
    originalPrice: "",
  },
  siteName: "",
  thumnail: "",
  href: "",
  endDate: "",
};

const SearchForm: React.FC<{ products: ProductFeed[] }> = ({ products }) => {
  const [isAutoSearch, setIsAutoSearch] = useState(false);
  const [isHover, setisHover] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [searchedProducts, setSearchedProducts] = useState<ProductFeed[]>([]);
  const [hoveringProduct, setHoveringProduct] =
    useState<ProductFeed>(initialHoverProduct);

  const inputSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(() => event.target.value);
  };

  const mouseHoverHandler = (value: boolean) => {
    setisHover(() => value);
  };

  function hoverProductFilter(id: string) {
    // 호버된 상품 필터
    if (id === "") {
      setHoveringProduct(initialHoverProduct);
    } else {
      setHoveringProduct(
        () => searchedProducts.filter((product) => product.id === id)[0]
      );
    }
  }

  useEffect(() => {
    if (searchKeyword.trim().length > 0) {
      setIsAutoSearch(true);
      const identifier = setTimeout(() => {
        setSearchedProducts(
          products.filter((product) => product.title.includes(searchKeyword))
        );
      }, 500);

      return () => {
        clearTimeout(identifier);
      };
    } else {
      setIsAutoSearch(false);
    }
  }, [searchKeyword, products]);

  return (
    <div className={style["container"]}>
      <div className={style["search"]}>
        <label htmlFor="search"></label>
        <input
          className={style["search-input"]}
          type="text"
          id="search"
          name="search"
          placeholder="상품 검색"
          onChange={inputSearchHandler}
        />
      </div>
      {isAutoSearch && (
        <SearchItemWrapper>
          <AutoSearch
            onProductId={(id) => hoverProductFilter(id)}
            onHover={mouseHoverHandler}
            product={searchedProducts}
          />
          {isHover && (
            <HoverItemWrapper>
              <ProductItem
                key={hoveringProduct.id}
                id={hoveringProduct.id}
                title={hoveringProduct.title}
                info={hoveringProduct.info}
                siteName={hoveringProduct.siteName}
                thumnail={hoveringProduct.thumnail}
                href={hoveringProduct.href}
                endDate={hoveringProduct.endDate}
              />
            </HoverItemWrapper>
          )}
        </SearchItemWrapper>
      )}
    </div>
  );
};

export default SearchForm;
