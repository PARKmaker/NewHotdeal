import React from "react";
import style from "./HoverItemWrapper.module.css";

type Props = {
  children?: React.ReactNode;
};

const HoverItemWrapper = ({ children }: Props) => {
  return <section className={style["item"]}>{children}</section>;
};

export default HoverItemWrapper;
