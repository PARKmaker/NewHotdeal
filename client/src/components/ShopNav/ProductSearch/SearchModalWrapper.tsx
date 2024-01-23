import React from "react";
import style from "./SearchModalWrapper.module.css";

type Props = {
  children?: React.ReactNode;
};

const SearchModalWrapper = ({ children }: Props) => {
  return <section className={style["item"]}>{children}</section>;
};

export default SearchModalWrapper;
