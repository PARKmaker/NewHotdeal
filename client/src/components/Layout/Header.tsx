import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <div className={style[`header`]}>
      <div className={style[`header__brand`]}>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={style["header__menu"]}>
        <nav className={style["header-nav"]}>
          <ul className={style["header-nav__items"]}>
            <li className={style["header-nav__item"]}>로그인</li>
            <li className={style["header-nav__item"]}>회원 정보</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
