// const cheerio = require("cheerio");
// const vm = require("vm");

import * as cheerio from "cheerio";
import vm from "vm";
import { removeComma } from "./utils.js";

async function getGmarketProductInfoText(url) {
  const response = await fetch(url);
  const data = await response.text(); //json으로 받으려다가 단일텍스트라 text()로 바꿈
  const $ = cheerio.load(data);
  const scriptElements = $("script");

  const scriptText =
    "data = " + $(scriptElements[15]).text().trim().replace("\n", " "); // 15번 인덱스에 script 내용이 있음
  return scriptText;
}

async function getGmarketInfo() {
  const products = [];

  const URL_GMARKET_DEFAULT = "https://www.gmarket.co.kr/n/superdeal";
  const scriptText = await getGmarketProductInfoText(URL_GMARKET_DEFAULT);
  let context = {};
  vm.createContext(context);
  vm.runInContext(scriptText, context);

  let productsInfoContent =
    context.data.props.pageProps.initialStates.home.totalDeals;

  for (let elem of productsInfoContent) {
    const info = {
      siteName: "G마켓",
      title: elem.goodsName, // 타이틀
      href: elem.itemUrl, // 상품 링크
      thumnail: elem.imageUrl, // 썸네일
      info: {
        discountRate: elem.discountPercent, // 할인율, 있거나 없음
        discountedPrice: elem.itemPrice, // 최종판매가격
        originalPrice: elem.sellPrice, // 기존 가격, 있거나 없음
      },

      // category: value,
      endDate: elem.dispInfo.dispEndDt,
    };

    products.push(info);
  }

  return products;
}

async function get11stInfo() {
  // 파싱 해야할 목록 : 카테고리별 핫딜(15개 카테고리), 아마존딜(총 8개), 긴급공수
  // 아마존딜과 긴급공수는 단순 파싱가능
  // 카테고리별 핫딜은 vm을 통한 script 가져오기
  const products = [];

  const URL_11ST =
    "https://deal.11st.co.kr/browsing/DealAction.tmall?method=getShockingDealMain";

  const response = await fetch(URL_11ST);
  const arraybuffer = await response.arrayBuffer(); //https://okky.kr/questions/1277676
  const data = new TextDecoder("euc-kr").decode(arraybuffer);
  const $ = cheerio.load(data);

  const amazonProductInfoElement = $(".c-card-item.c-card-item--collection"); // 아마존 핫딜
  const emergencyAirliftProductInfoElement = $(".cfix .box_pd"); // 긴급 공수 핫딜

  function getInfoFromElement11st(element, selectors) {
    const {
      info,
      title,
      href,
      thumnail,
      discountRate,
      discountedPrice,
      originalPrice,
      endDate,
    } = selectors;

    const anckerElements = element.children("a");
    const infoElements = element.find(info);
    const productInfo = {
      siteName: "11번가",
      thumnail: anckerElements.find(thumnail).attr("src"), // 썸네일
      href: anckerElements.attr(href), // 상품 링크
      title: infoElements.find(title).text().replace('"', "").trim(), // 타이틀
      info: {
        // 할인율, 있거나 없음
        discountRate: removeComma(
          infoElements.find(discountRate).text().replace("%", "").trim()
        ),
        //할인된 가격
        discountedPrice: removeComma(
          infoElements.find(discountedPrice).text().replace("원", "").trim()
        ),
        originalPrice: removeComma(
          infoElements.find(originalPrice).text().replace("원", "").trim()
        ), // 기존 가격, 있거나 없음
      },
      endDate: infoElements.find(endDate).text().trim(),
    };

    return productInfo;
  }

  amazonProductInfoElement.each((idx, el) => {
    const classSelecters = {
      info: ".c-card-item__info",
      title: ".c-card-item__name > dd",
      href: "href",
      thumnail: ".c-card-item__thumb-img > img",
      discountRate: ".c-card-item__rate > .value",
      discountedPrice: ".c-card-item__price .value",
      originalPrice: "",
      endDate: "",
    };

    products.push(getInfoFromElement11st($(el), classSelecters));
  });

  emergencyAirliftProductInfoElement.each((idx, el) => {
    const classSelecters = {
      info: ".prd_info",
      title: ".fs_16",
      href: "href",
      thumnail: ".prd_img > img",
      discountRate: ".price_info > .sale",
      discountedPrice: ".sale_price",
      originalPrice: ".normal_price",
      endDate: ".chgTime",
    };
    products.push(getInfoFromElement11st($(el), classSelecters));
  });

  // 11번가를 스크래핑 할 때 카테고리별 아이템 부분은 html로 가져오지 못하고 scirpt형태로 가져오게됨
  // 그로 인해 cheerio로 Dom형태로 만들 수 없어 기존 처럼 스크래핑이 안되어
  // sciprt 태그 안에 text를에 문자열 처리를 추가한 다음 변수를 노드환경에서 실행 시켜 변수의 값을 읽을 예정
  let scriptText = $($("script")[21]).text().trim().replace("\n", " ");
  const scriptTextIndexOfVar = scriptText.lastIndexOf("var");
  scriptText = scriptText.slice(0, scriptTextIndexOfVar).trim();
  const context = {};
  vm.createContext(context);
  vm.runInContext(scriptText, context);
  const infoContents = context.templateData.dealBest.items;

  for (let elem of infoContents) {
    const productInfo = {
      siteName: "11번가",
      title: elem.prdNm, // 타이틀
      href: elem.url1, // 상품 링크
      thumnail: elem.prdImgUrl, // 썸네일
      info: {
        discountRate: removeComma(elem.dscRt), // 할인율, 있거나 없음
        discountedPrice: removeComma(elem.finalDscPrc), // 할인된 가격
        originalPrice: removeComma(elem.selPrc), // 기존 가격, 있거나 없음
      },
      // category: elem.category1,
      endDate: elem.endDt,
    };

    products.push(productInfo);
  }

  return products;
}

async function getInfo() {
  // const gmarketInfo = await getGmarketInfo();
  // const st11Info = await get11stInfo();

  let [gmarketInfo, st11Info] = await Promise.all([
    getGmarketInfo(),
    get11stInfo(),
  ]);

  const allProductInfo = [...gmarketInfo, ...st11Info];

  return allProductInfo;
}
getInfo();
export default getInfo;
