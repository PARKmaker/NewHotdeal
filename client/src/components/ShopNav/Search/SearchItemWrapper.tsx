import React from "react";
import style from "./SearchItemWrapper.module.css";

type Props = {
  children?: React.ReactNode;
};

const SearchItemWrapper = ({ children }: Props) => {
  return <section className={style["item"]}>{children}</section>;
};

export default SearchItemWrapper;
