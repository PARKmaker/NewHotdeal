import "./App.css";
import React, { useState } from "react";
import Main from "./components/Layout/Main";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

// 파이어 베이스에서 상품 목록을 가져올 때 한번만 가져와 저장하고
// 홈페이지가 유지되는 동안 저장한 아이템 목록을 사용 하고자 한다.
// 다운로드 과부화 방지

let hasItem = false;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // let items: [] = [];

  // const store: ItemsStore = new Store();

  // async function setItemsInfo() {
  //   try {
  //     store.setItems(await getData());
  //   } catch (err: any) {
  //     setIsLoading(false);
  //     setError(err.message);
  //   }

  //   setIsLoading(false);
  // }

  // if (!store.hasItems) {
  //   setItemsInfo();
  // }

  return (
    <div className="App">
      {/* <Main></Main> */}
      <div className="app-container">
        <Layout>
          <main>
            <Products />
          </main>
        </Layout>
      </div>
    </div>
  );
}

export default App;
