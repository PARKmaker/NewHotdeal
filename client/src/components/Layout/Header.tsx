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
        {/* <div className={style["search"]}>
          <label htmlFor="search"></label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="검색어 입력"
          />
          <img
            className={style["icon"]}
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
          />
        </div> */}
        {/* <nav className={style["header-nav"]}>
          <ul className={style["header-nav__items"]}>
            <li key={"login"} className={style["header-nav__item"]}>
              로그인
            </li>
            <li key={"info"} className={style["header-nav__item"]}>
              회원 정보
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
};

export default Header;
