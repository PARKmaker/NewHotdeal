import React from "react";
import style from "./ModalBackdrop.module.css";

const ModalBackdrop = (props: {
  onCloseModal: (event: React.MouseEvent) => void;
}) => {
  return <div className={style["backdrop"]} onClick={props.onCloseModal}></div>;
};

export default ModalBackdrop;
