import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, goOffline } from "firebase/database";
import getInfo from "./dom.js";
import curDate from "./utils.js";
import dotenv from "dotenv";

dotenv.config();
// dotenv.config({ path: "server/.env" });

const {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

async function writeProductsData(date) {
  const database = getDatabase(app);
  const info = await getInfo();

  Promise.resolve(set(ref(database, "products/" + date), info))
    .then(() => goOffline(database)) //https://firebase.google.com/docs/reference/js/database.md?hl=ko#gooffline
    .catch((e) => console.error(e));
}
writeProductsData(curDate);
