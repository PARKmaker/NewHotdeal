# 박상현

<div align="center">

  <h1>쇼핑몰 핫딜 사이트</h1>
  
  <!-- <p>
    An awesome README template for your projects! 
  </p> -->
</div>

<!-- About the Project -->

## :star2: 배포 링크

<a href="https://hotdeal.vercel.app/">배포 사이트</a> **DB 최적화 문제로 인한 프론트엔드만 배포**

<!--
## :camera: 데모 영상 : 유튜브 링크

## [![Video Label](https://img.youtube.com/vi/ycLI25jkSeU/0.jpg)](https://youtu.be/ycLI25jkSeU)
-->

## 아키텍쳐

<img width="500" alt="핫딜 아키텍처 2" src="https://github.com/PARKmaker/NewHotdeal/assets/77065758/f7d59ec0-4528-4b8d-b6ce-e5bb973b758b">

<img width="500" alt="핫딜 아키텍처 2" src="https://github.com/PARKmaker/NewHotdeal/assets/77065758/dd5de9f6-f921-4c41-9a4c-0f7c8c7f3003">

</div>

## 프로젝트 개요

- 다양한 쇼핑몰의 핫딜(할인딜)을 가져와 한 페이지에 보여주고, 필터링을 통해 원하는 사이트 또는 제품을 보여 줄 수 있다.

## 기능

- 11번가와 G마켓의 핫딜(쇼킹딜, 슈퍼딜)을 주기적으로 파싱하여 Firebase에 저장.
- 핫딜을 가져와 사용자에게 보여준다.
- 상품 필터링과 자동 완성 검색을 제공한다.

## :dart: 특징

- **크롤링 후 db 저장 자동화** - Github Actions으로 정해진 시간 마다 크롤링(cheerio) 후 Firebase에 저장 :
  https://github.com/PARKmaker/NewHotdeal/blob/main/.github/workflows/node.js.yml
- **TypeScript 도입** : https://github.com/PARKmaker/NewHotdeal/blob/main/client/src/models/product.ts
- **Class를 이용한 Store관리를 통한 유지보수 용이에 초점** : https://github.com/PARKmaker/NewHotdeal/blob/main/client/src/services/productService/productService.ts
- **Grid 도입을 통한 반응형 상품목록 페이지**
- 11번가와, G마켓 구현완료(다른 사이트는 계속 업데이트 될 예정).

<!-- 사용 기술 스택 -->

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
  </ul>
</details>

<details>
<summary>CI/CD</summary>
  <ul>
    <li><a href="https://firebase.google.com">Firebase Realtime Database</a></li>
    <li><a href="https://github.com/">Github actions</a></li>
  </ul>
</details>

## :grey_question: 개발하면서 고민한점

- 크롤링시 인코딩 문제와, Script 태그 크롤링을 위한 vm모듈 사용 : https://velog.io/@tkdgus8903/Hotdeal-%EC%9B%B9-%EC%84%9C%EB%B9%84%EC%8A%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0-1-%ED%81%AC%EB%A1%A4%EB%A7%81-%ED%95%98%EA%B8%B0
- Github actions에서 Cron을 스케쥴링, 매시간 마다 크롤링 코드를 실행하고 이를 Firebase에 저장.
- 관심사 분리와 유지보수 상승을 위한 Store Class구현.
- 병렬 프라미스 처리시 Promise.all()의 사용 방법을 익힘.

### 추가 이미지 자료

#### db데이터 json구조

![image](https://github.com/PARKmaker/NewHotdeal/assets/77065758/995c5810-50df-4d25-a98c-03929f7ce7b5)

#### Github Actions Workflows

![image](https://github.com/PARKmaker/NewHotdeal/assets/77065758/b8952fd4-7dcf-485a-9a65-13208c969a7b)

![image](https://github.com/PARKmaker/NewHotdeal/assets/77065758/2265bc65-8a47-4bb1-a7ac-62561c4d639c)

### :key: Environment Variables

.env file에 해당 환경변수를 설정해야 합니다.(Firebase)
Github actions Secret Key 설정

## <!-- Getting Started -->

## :toolbox: Getting Started

### :running: Run Locally

#### Client

Clone the project

```bash
  git clone https://github.com/PARKmaker/NewHotdeal.git
```

Go to the project directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

#### Server(Crawler)

Clone the project

git clone https://github.com/PARKmaker/NewHotdeal.git

Go to the project directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server // 파이어베이스 환경설정 필요

```bash
  node firebase.js
```

