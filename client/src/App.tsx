import "./App.css";
import React, { useEffect, useState, useCallback } from "react";
import { dbRef } from "./services/getDbRefFromFirebase";
import { child, get } from "firebase/database";
import { getDayBefore, year, month, day } from "./utils/date";

let isGetItems = false;
// 파이어 베이스에서 상품 목록을 가져올 때 한번만 가져와 저장하고
// 홈페이지가 유지되는 동안 저장한 아이템 목록을 사용 하고자 한다.
// 다운로드 과부화 방지

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let items: [] = [];

  get(child(dbRef, `products/${year}/${month}/${day}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // products = snapshot.val();
        items = snapshot.val();
      } else {
        // 서버에 저장이 안되어 당일 데이터가 없는 경우 전날 데이터 불러온다.
        const [newYear, newMonth, newDay] = getDayBefore(year, month, day);
        get(child(dbRef, `products/${newYear}/${newMonth}/${newDay}`)).then(
          (snapshot) => {
            if (snapshot.exists()) {
              // products = snapshot.val();
              items = snapshot.val();
            } else {
              return null;
            }
          }
        );
      }
    })
    .catch((error) => {
      console.error(error);
    });

  console.log(items);
  return <div className="App"></div>;
}

export default App;
