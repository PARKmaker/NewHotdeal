import React from "react";
import style from "./ShopNav.module.css";

const ShopNav = (props: { children?: React.ReactNode }) => {
  return <div className={style["container"]}>{props.children}</div>;
};

export default ShopNav;
