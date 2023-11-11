import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref } from "firebase/database";
import { year, month, day, getDayBefore } from "../utils/date";
import { ItemsFeed } from "../models/item";

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
};

export async function getData() {
  const app = initializeApp(firebaseConfig);
  const dbRef = ref(getDatabase(app));
  const [yesterdayYear, yesterdayMonth, yesterdayDay] = getDayBefore(
    year,
    month,
    day
  );

  const responseSnapshotToday = await get(
    child(dbRef, `products/${year}/${month}/${day}`)
  );
  const responseSnapshotYesterday = await get(
    child(dbRef, `products/${yesterdayYear}/${yesterdayMonth}/${yesterdayDay}`)
  );

  let responseData;

  if (!responseSnapshotToday.exists() && !responseSnapshotYesterday.exists()) {
    throw new Error("Firebase 가져오기 실패");
  }

  if (responseSnapshotToday.exists()) {
    responseData = responseSnapshotToday.val();
  } else if (responseSnapshotYesterday.exists()) {
    responseData = responseSnapshotYesterday.val();
  }

  const loadedItems: ItemsFeed[] = [];

  for (const key in responseData) {
    loadedItems.push({
      id: Number(`${year}${month}${day}${key}`),
      title: responseData[key].title,
      thumnail: responseData[key].thumnail,
      href: responseData[key].href,
      siteName: responseData[key].siteName,
      info: {
        discountRate: Number(responseData[key].info.discountRate),
        discountedPrice: Number(responseData[key].info.discountedPrice),
        originalPrice: Number(responseData[key].info.originalPrice),
      },
      endDate: responseData[key].endDate,
      read: false,
    });
  }

  return loadedItems;
}
