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
        <form className={style["header__search"]}>
          <label htmlFor="search"></label>
          <img
            className={style["search-icon"]}
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
          ></img>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="제품 검색"
          />
        </form>
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
