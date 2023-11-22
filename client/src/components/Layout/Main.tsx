import React from "react";
import style from "./Main.module.css";
import logo from "../../assets/logo.png";

const Main = () => {
  return (
    <div className={style[`main-container`]}>
      <header className={style[`main-header`]}>
        <div className={style[`main-header__brand`]}>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={style["main-header__menu"]}>
          <form className={style["main-header__search"]}>
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
          <nav className={style["main-header-nav"]}>
            <ul className={style["main-header-nav__items"]}>
              <li className={style["main-header-nav__item"]}>로그인</li>
              <li className={style["main-header-nav__item"]}>회원 정보</li>
            </ul>
          </nav>
        </div>
      </header>
      <nav className={style[`main-nav`]}>
        <li>전체</li>
        <li className={style["choice"]}>11번가</li>
        <li>G마켓</li>
      </nav>
      <main>
        <ul className={style[`item__list`]}>
          <li id="1">
            <div className={style["item"]}>
              <a href="http://item.gmarket.co.kr/Item?goodscode=3239643248">
                <div className={style["item__img"]}>
                  <img
                    src="//image.gmarket.co.kr/hanbando/202311/af108648-79f7-4120-adf8-923c8790bf48.jpg"
                    alt=""
                  />
                </div>
                <p className={style["item__title"]}>
                  (15%+10%쿠폰가 9900원) 1+1 윈터 마스크캡 겨울 남녀공용 귀달이
                  방한모자 군밤모자 / 사은품 넥워머 Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Est aut officia, repellat id ad
                  magni optio dolorum, doloremque, consequuntur iste dolore
                  libero explicabo quas tempora voluptate eaque ea excepturi
                  provident?
                </p>
              </a>
              <div className={style["item__info"]}>
                <em className={style["item__discount_rate"]}>10%</em>
                <strong className={style["item__sale_price"]}>12,300원</strong>
                <del className={style["item__normal_price"]}>30,000원</del>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Main;
