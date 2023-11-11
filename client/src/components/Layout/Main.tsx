import React from "react";
import classes from "./Main.module.css";
import logo from "../../assets/logo.png";

const Main = () => {
  return (
    <div className={classes[`main-container`]}>
      <header className={classes[`main-header`]}>
        <div>
          <a href="#" className={classes[`main-header__brand`]}>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <form className={classes["main-header__search"]}>
          <label htmlFor="search"></label>
          <input type="text" id="search" name="search" />
        </form>
        <nav className={classes["main-header-nav"]}>
          <ul className={classes["main-header-nav__items"]}>
            <li className={classes["main-header-nav__item"]}>로그인</li>
            <li className={classes["main-header-nav__item"]}>회원 정보</li>
          </ul>
        </nav>
      </header>
      <nav className={classes[`main-nav`]}>
        <li className={classes["choice"]}>11번가</li>
        <li>G마켓</li>
      </nav>
      <main>
        <ul className={classes[`main-items`]}>
          <li className={classes["item"]}>
            <div>
              <h3>물건 이름1</h3>
              <div className={classes["description"]}>설명1</div>
              <div className={classes["price"]}>가격1</div>
            </div>
          </li>
          <li className={classes["item"]}>
            <div>
              <h3>물건 이름2</h3>
              <div className={classes["description"]}>설명2</div>
              <div className={classes["price"]}>가격2</div>
            </div>
          </li>
          <li className={classes["item"]}>
            <div>
              <h3>물건 이름3</h3>
              <div className={classes["description"]}>설명3</div>
              <div className={classes["price"]}>가격3</div>
            </div>
          </li>
          <li className={classes["item"]}>
            <div>
              <h3>물건 이름4</h3>
              <div className={classes["description"]}>설명4</div>
              <div className={classes["price"]}>가격4</div>
            </div>
          </li>
          <li className={classes["item"]}>
            <div>
              <h3>물건 이름5</h3>
              <div className={classes["description"]}>설명5</div>
              <div className={classes["price"]}>가격5</div>
            </div>
          </li>
        </ul>
      </main>
      <footer className={classes[`main-footer`]}>푸터</footer>
    </div>
  );
};

export default Main;
